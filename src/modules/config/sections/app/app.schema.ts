import { z } from "zod";
import { NodeEnvEnum } from "./node-env.enum";

export const appSchema = z.object({
  APP_URL: z.string().url(),
  NODE_ENV: z.enum(Object.values(NodeEnvEnum) as [string, ...string[]]),
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  JWT_EXPIRATION_TIME: z
    .string()
    .default("3600s")
    .refine((val) => /^\d+[smhd]$/.test(val), {
      message:
        "JWT_EXPIRATION_TIME must be a string ending with s, m, h, or d (e.g., 3600s, 60m, 24h, 7d)",
    }),
});
