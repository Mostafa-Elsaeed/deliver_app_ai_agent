import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Message } from './message.entity';
import { EventsGateway } from '../../realtime/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private repo: Repository<Message>, private events: EventsGateway) {}
  list() { return this.repo.find({ order: { timestamp: 'ASC' } }); }
  async create(data: Partial<Message>) { const saved = await this.repo.save(this.repo.create(data)); this.events.emit('messages.created', saved); return saved; }
}
