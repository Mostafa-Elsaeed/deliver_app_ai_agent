import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@ApiTags("Messages")
@Controller("messages")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MessagesController {
  constructor(private messages: MessagesService) {}

  @Get()
  @ApiOperation({ summary: "List messages" })
  @ApiResponse({ status: 200, description: "Return list of messages involved with the user" })
  list(@Req() req: any) {
    return this.messages.list(req.user.sub);
  }

  @Post()
  @ApiOperation({ summary: "Create a message" })
  @ApiResponse({ status: 201, description: "Message successfully created" })
  create(@Body() body: CreateMessageDto, @Req() req: any) {
    return this.messages.create(req.user.sub, body);
  }
}
