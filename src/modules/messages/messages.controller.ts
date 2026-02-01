import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./dto/create-message.dto";

@ApiTags("Messages")
@Controller("messages")
export class MessagesController {
  constructor(private messages: MessagesService) {}

  @Get()
  @ApiOperation({ summary: "List messages" })
  @ApiResponse({ status: 200, description: "Return list of messages" })
  list() {
    return this.messages.list();
  }

  @Post()
  @ApiOperation({ summary: "Create a message" })
  @ApiResponse({ status: 201, description: "Message successfully created" })
  create(@Body() body: CreateMessageDto) {
    return this.messages.create(body);
  }
}
