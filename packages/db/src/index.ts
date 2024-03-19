import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("No DATABASE_URL provided");
}

const connection = connect({
  url,
});

export const db = drizzle(connection, { schema });

export type DataBase = typeof db;
