import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private wallets: WalletsService) {}

  @Get(':user_id')
  async get(@Param('user_id') user_id: string) {
    const w = await this.wallets.findByUser(user_id);
    return w ?? this.wallets.ensure(user_id);
  }

  @Patch(':user_id')
  update(@Param('user_id') user_id: string, @Body() body: any) {
    return this.wallets.update(user_id, body);
  }
}
