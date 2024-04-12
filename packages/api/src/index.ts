import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./root";
import type { Context } from "./trpc";
import { appRouter } from "./root";
import { createCallerFactory, createContext } from "./trpc";

const createCaller = createCallerFactory(appRouter);

type RouterInputs = inferRouterInputs<AppRouter>;

type RouterOutputs = inferRouterOutputs<AppRouter>;

export { appRouter, createCaller, createContext };
export type { AppRouter, Context, RouterInputs, RouterOutputs };
