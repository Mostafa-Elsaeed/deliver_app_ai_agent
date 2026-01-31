import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messages: MessagesService) {}

  @Get()
  list() { return this.messages.list(); }

  @Post()
  create(@Body() body: any) { return this.messages.create(body); }
}
