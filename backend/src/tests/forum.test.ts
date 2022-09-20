import supertest from "supertest";
import app, { dbInitialised } from "../app.js";
import { Database } from "../utils/db.js";
import { Seeder } from "@mikro-orm/seeder";
import { EntityManager } from "@mikro-orm/core";
import Comments from "../models/commentModel.js";
import Threads from "../models/threadModel.js";
import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import { getLoginStatusAPI, getThreadListAPI } from "@shadowrun/common/";

const api = supertest(app);
class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const saltRounds = 10;
    let hash1 = await bcrypt.hash("password1", saltRounds);
    let hash2 = await bcrypt.hash("password2", saltRounds);
    // will get persisted automatically
    const user1 = em.create(Users, {
      username: "User 1",
      password: hash1,
      admin: true,
    });
    const user2 = em.create(Users, {
      username: "User 2",
      password: hash2,
      admin: false,
    });

    const thread1 = em.create(Threads, {
      title: "Thread Title 1",
      user: user1,
    });
    const thread2 = em.create(Threads, {
      title: "Thread Title 2",
      user: user1,
    });
    const thread3 = em.create(Threads, {
      title: "Thread Title 3",
      user: user2,
    });

    em.create(Comments, {
      title: "Comment Title 1",
      content: "Comment Content 1",
      user: user1,
      thread: thread1,
    });
    em.create(Comments, {
      title: "Comment Title 2",
      content: "Comment Content 2",
      user: user2,
      thread: thread1,
    });

    em.create(Comments, {
      title: "Comment Title 3",
      content: "Comment Content 3",
      user: user2,
      thread: thread2,
    });

    em.create(Comments, {
      title: "Comment Title 4",
      content: "Comment Content 4",
      user: user1,
      thread: thread3,
    });
    em.create(Comments, {
      title: "Comment Title 5",
      content: "Comment Content 5",
      user: user2,
      thread: thread3,
    });
  }
}

let token: string;

beforeAll(async () => {
  await dbInitialised;
  await Database.orm.getSchemaGenerator().refreshDatabase();
  const seeder = Database.orm.getSeeder();
  await seeder.seed(DatabaseSeeder);
  const response = await api.post("/api/authentication/login").send({
    username: "User 1",
    password: "password1",
  });
  token = response.body.token;
  console.log(token);
});

test("threads are returned when authenticated", async () => {
  await api
    .get(getThreadListAPI)
    .set("Authorization", `Bearer ${token}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("no threads are returned without authentication", async () => {
  await api.get(getThreadListAPI).expect(400);
});

test("verify user jwt with correct jwt", async () => {
  await api
    .get(getLoginStatusAPI)
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});

test("invalidate user jwt with incorrect jwt", async () => {
  await api
    .get(getLoginStatusAPI)
    .set("Authorization", "Bearer BadToken")
    .expect(500);
});

afterAll(async () => {
  await Database.orm.close();
});
