import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfig } from './sections/app/app.config';
import { AuthConfig } from './sections/auth/auth.config';
import { DatabaseConfig } from './sections/database/database.config';
import { SecurityConfig } from './sections/security/security.config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get app(): AppConfig {
    return this.configService.get<AppConfig>('app')!;
  }

  get auth(): AuthConfig {
    return this.configService.get<AuthConfig>('auth')!;
  }

  get database(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database')!;
  }

  get security(): SecurityConfig {
    return this.configService.get<SecurityConfig>('security')!;
  }

  get(key: string): any {
    return this.configService.get(key);
  }
}
