import "dotenv/config";
// import * as logger from "./logger.js";
// import { DATABASE_URL } from "./config.js";
import MikroORMConfig from "../mikro-orm.config.js";
import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Users, Threads, Comments } from "../models/models.js";

interface IDatabase {
  orm: MikroORM;
  em: EntityManager;
  userRepository: EntityRepository<Users>;
  threadRepository: EntityRepository<Threads>;
  commentRespository: EntityRepository<Comments>;
}

export const Database = {} as IDatabase;

export const init = async () => {
  const orm = await MikroORM.init<PostgreSqlDriver>(MikroORMConfig);
  const em = orm.em;
  Database.orm = orm;
  Database.em = em.fork();
  Database.userRepository = em.getRepository(Users);
  Database.threadRepository = em.getRepository(Threads);
  Database.commentRespository = em.getRepository(Comments);
};
