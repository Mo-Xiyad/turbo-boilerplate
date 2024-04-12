import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { currentUser } from "@clerk/nextjs";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

// import type { DataBase } from "@acme/db";
import { db } from "@acme/db";

// export interface Context {
//   user: typeof currentUser extends () => Promise<infer U> ? U : never;
//   db: DataBase;
// }

export async function createContext(opts?: FetchCreateContextFnOptions) {
  const user = await currentUser();
  return {
    user,
    db,
    headers: opts && Object.fromEntries(opts.req.headers),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

// export const createContext = async (): Promise<Context> => {
//   const user = await currentUser();

//   return {
//     user,
//     db,
//   };
// };

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
    },
  });
});
