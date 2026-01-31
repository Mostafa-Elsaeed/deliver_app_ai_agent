import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviews: ReviewsService) {}

  @Get()
  list() { return this.reviews.list(); }

  @Post()
  create(@Body() body: any) { return this.reviews.create(body); }
}
