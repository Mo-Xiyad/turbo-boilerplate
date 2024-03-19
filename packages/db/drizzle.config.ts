import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("No DATABASE_URL provided");
}

export default {
  schema: "./src/schema",
  driver: "mysql2",
  dbCredentials: { uri: url },
} satisfies Config;
