import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { RoleEnum } from './role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email }, select: {id:true, email:true, name:true, passwordHash:true,role:true} });
  }

  async create(email: string, name: string, password: string,role:RoleEnum) {
    console.log(`Role is ${role}`)
    const passwordHash = await bcrypt.hash(password, 10);
    const user = this.repo.create({ email:email,
      name:name,
      passwordHash:passwordHash,
      role:role });
    return this.repo.save(user);
  }

  async findPublicById(id: string) {
    return this.repo.findOne({ where: { id } });
  }
}
