import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export const securityConfigSchema = z.object({
  corsOrigins: z.array(z.string()).default(['*']),
  throttleTtL: z.coerce.number().default(60),
  throttleLimit: z.coerce.number().default(10),
});

export type SecurityConfig = z.infer<typeof securityConfigSchema>;

export default registerAs('security', (): SecurityConfig => {
  return {
    corsOrigins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*'],
    throttleTtL: parseInt(process.env.THROTTLE_TTL || '60', 10),
    throttleLimit: parseInt(process.env.THROTTLE_LIMIT || '10', 10),
  };
});
