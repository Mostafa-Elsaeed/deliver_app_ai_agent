import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private configService: ConfigService,
  ) {}

  async register(registerBody: RegisterDto) {
    const { email, name, password, role } = registerBody;
    console.log(`Role is ${role}`);
    const existing = await this.users.findByEmail(email);
    if (existing) throw new UnauthorizedException('User already exists');

    const user = await this.users.create(email, name, password, role);
    return { id: user.id, email: user.email, name: user.name };
  }

  async login(body: LoginDto) {
    const { email, password } = body;
    const user = await this.users.findByEmail(email);
    console.log(email);
    console.log(user);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ok = await bcrypt.compare(password, user.passwordHash);
    // if (!ok) throw new UnauthorizedException('Invalid credentials');

    const token = jwt.sign(
      { sub: user.id, email: user.email },
      this.configService.auth.jwtSecret,
      { expiresIn: this.configService.auth.jwtExpiration as any },
    );
    console.log(user.role);
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }
}
