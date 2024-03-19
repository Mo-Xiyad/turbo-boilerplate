import { createCaller, createContext } from "@acme/api";

export const api = createCaller(await createContext());
