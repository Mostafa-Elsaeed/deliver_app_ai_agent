import { registerAs } from "@nestjs/config";
import { z } from "zod";

export const databaseConfigSchema = z.object({
  type: z.enum(["postgres", "sqlite"]).default("postgres"),
  host: z.string().default("localhost"),
  port: z.coerce.number().default(5432),
  username: z.string().default("postgres"),
  password: z.string().default("12345"),
  database: z.string().default("DB"),
  ssl: z.any().optional(),
});

export type DatabaseConfig = z.infer<typeof databaseConfigSchema>;

import { parse } from "pg-connection-string";

export default registerAs("database", (): DatabaseConfig => {
  if (process.env.DATABASE_URL) {
    const config = parse(process.env.DATABASE_URL);
    return {
      type: "postgres",
      host: config.host || "localhost",
      port: parseInt(config.port || "5432", 10),
      username: config.user || "postgres",
      password: config.password || "12345",
      database: config.database || "DB",
      ssl: config.ssl as any,
    };
  }

  return {
    type: (process.env.DB_TYPE as any) || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "12345",
    database: process.env.DB_NAME || "DB",
  };
});
