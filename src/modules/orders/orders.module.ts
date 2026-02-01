import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { EventsModule } from "../../realtime/events.module";

@Module({
  imports: [EventsModule, TypeOrmModule.forFeature([Order])],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
