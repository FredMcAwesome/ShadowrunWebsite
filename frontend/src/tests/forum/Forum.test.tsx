import { rest } from "msw";
import { screen } from "@testing-library/react";
import Forum from "../../components/forum/Forum.js";
import { server } from "../mocks/server.js";
import { ThreadListType } from "@shadowrun/common";
import { renderWithProviders } from "../../utils/TestingUtils.js";
import { getThreadList } from "../../utils/api.js";

test("Default display", async () => {
  const handlers = [
    rest.get(getThreadList, (_req, res, ctx) => {
      const threads: ThreadListType = [
        {
          title: "example",
          user: "user1",
          id: 1,
        },
      ];
      return res(ctx.json(threads), ctx.delay(50));
    }),
  ];
  server.listen({
    onUnhandledRequest: () => {
      throw new Error(`Unhandled request`);
    },
  });
  server.use(...handlers);
  renderWithProviders(<Forum />);
  expect(await screen.findByText(/Thread: example/i)).toBeInTheDocument();
});
