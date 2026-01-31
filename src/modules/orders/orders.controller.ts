import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderStatus } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private orders: OrdersService) {}

  @Get()
  list() { return this.orders.findAll(); }

  @Get(':id')
  get(@Param('id') id: string) { return this.orders.findOne(id); }

  @Post()
  create(@Body() body: any) { return this.orders.create(body); }

  @Patch(':id/status')
  setStatus(@Param('id') id: string, @Body() body: { status: OrderStatus }) {
    return this.orders.update(id, { status: body.status });
  }
}
