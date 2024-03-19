// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// import { appRouter, createTRPCContext } from "@acme/api";
// import { auth } from "@acme/auth";

// export const runtime = "edge";

// /**
//  * Configure basic CORS headers
//  * You should extend this to match your needs
//  */
// function setCorsHeaders(res: Response) {
//   res.headers.set("Access-Control-Allow-Origin", "*");
//   res.headers.set("Access-Control-Request-Method", "*");
//   res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
//   res.headers.set("Access-Control-Allow-Headers", "*");
// }

// export function OPTIONS() {
//   const response = new Response(null, {
//     status: 204,
//   });
//   setCorsHeaders(response);
//   return response;
// }

// const handler = auth(async (req) => {
//   const response = await fetchRequestHandler({
//     endpoint: "/api/trpc",
//     router: appRouter,
//     req,
//     createContext: () =>
//       createTRPCContext({
//         session: req.auth,
//         headers: req.headers,
//       }),
//     onError({ error, path }) {
//       // eslint-disable-next-line no-console
//       console.error(`>>> tRPC Error on '${path}'`, error);
//     },
//   });

//   setCorsHeaders(response);
//   return response;
// });

// export { handler as GET, handler as POST };
// app/api/trpc/[trpc]/route.ts

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
