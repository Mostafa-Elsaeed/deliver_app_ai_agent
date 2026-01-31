import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BidsService } from './bids.service';

@Controller('bids')
export class BidsController {
  constructor(private bids: BidsService) {}

  @Get()
  list(@Query('orderId') orderId?: string) { return this.bids.list(orderId); }

  @Post()
  create(@Body() body: any) { return this.bids.create(body); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) { return this.bids.update(id, body); }
}
