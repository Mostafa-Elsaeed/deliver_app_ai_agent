import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Order } from './order.entity';
import { EventsGateway } from '../../realtime/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private repo: Repository<Order>,
    private events: EventsGateway,
  ) {}

  async findAll() { return this.repo.find({ order: { created_at: 'DESC' } }); }
  findOne(id: string) { return this.repo.findOne({ where: { id } }); }
  async create(data: Partial<Order>) {
    const saved = await this.repo.save(this.repo.create(data));
    this.events.emit('orders.created', saved);
    return saved;
  }
  async update(id: string, data: Partial<Order>) {
    await this.repo.update(id, data);
    const updated = await this.findOne(id);
    this.events.emit('orders.updated', updated);
    return updated;
  }
}
