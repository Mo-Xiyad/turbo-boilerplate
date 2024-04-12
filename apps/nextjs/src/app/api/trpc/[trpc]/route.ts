import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter, createContext } from "@acme/api";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => createContext(),
  });

export { handler as GET, handler as POST };
