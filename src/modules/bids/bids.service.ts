import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Bid } from './bid.entity';
import { EventsGateway } from '../../realtime/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class BidsService {
  constructor(@InjectRepository(Bid) private repo: Repository<Bid>, private events: EventsGateway) {}
  list(orderId?: string) {
    return orderId ? this.repo.find({ where: { orderId } }) : this.repo.find();
  }
  async create(data: Partial<Bid>) { const saved = await this.repo.save(this.repo.create(data)); this.events.emit('bids.created', saved); return saved; }
  async update(id: string, data: Partial<Bid>) { await this.repo.update(id, data); const updated = await this.repo.findOne({ where: { id } }); this.events.emit('bids.updated', updated); return updated; }
}
