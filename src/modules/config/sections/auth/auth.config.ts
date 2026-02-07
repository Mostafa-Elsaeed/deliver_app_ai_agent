import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export const authConfigSchema = z.object({
  jwtSecret: z.string().min(1),
  jwtExpiration: z.string().default('1h'),
});

export type AuthConfig = z.infer<typeof authConfigSchema>;

export default registerAs('auth', (): AuthConfig => {
  return {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiration: process.env.JWT_EXPIRATION || '1h',
  };
});
