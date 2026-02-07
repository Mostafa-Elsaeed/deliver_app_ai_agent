import { Module, Global } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { validate } from './zod.validator';
import appConfig from './sections/app/app.config';
import authConfig from './sections/auth/auth.config';
import databaseConfig from './sections/database/database.config';
import securityConfig from './sections/security/security.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, databaseConfig, securityConfig],
      validate: validate,
      cache: true,
      expandVariables: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
