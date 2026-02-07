import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Message } from './message.entity';
import { EventsGateway } from '../../realtime/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private repo: Repository<Message>, private events: EventsGateway) {}
  list(userId: string) {
    return this.repo.find({
      where: [
        { senderId: userId },
        { recipientId: userId },
      ],
      order: { timestamp: 'ASC' },
    });
  }

  async create(senderId: string, data: Partial<Message>) {
    const message = this.repo.create({ ...data, senderId });
    const saved = await this.repo.save(message);
    this.events.emit('messages.created', saved);
    return saved;
  }
}
