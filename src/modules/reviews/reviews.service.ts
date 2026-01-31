import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Review } from './review.entity';
import { EventsGateway } from '../../realtime/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private repo: Repository<Review>, private events: EventsGateway) {}
  list() { return this.repo.find(); }
  async create(data: Partial<Review>) { const saved = await this.repo.save(this.repo.create(data)); this.events.emit('reviews.created', saved); return saved; }
}
