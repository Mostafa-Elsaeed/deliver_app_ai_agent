import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { ReviewsService } from "./reviews.service";
import { ReviewsController } from "./reviews.controller";
import { EventsModule } from "../../realtime/events.module";

@Module({
  imports: [EventsModule, TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
  exports: [ReviewsService],
})
export class ReviewsModule {}
