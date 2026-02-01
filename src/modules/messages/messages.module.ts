import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { EventsModule } from "../../realtime/events.module";

@Module({
  imports: [EventsModule, TypeOrmModule.forFeature([Message])],
  providers: [MessagesService],
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessagesModule {}
