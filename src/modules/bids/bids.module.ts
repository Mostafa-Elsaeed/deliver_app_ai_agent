import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bid } from './bid.entity';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';
import { EventsModule } from 'src/realtime/events.module';

@Module({
  imports: [EventsModule,TypeOrmModule.forFeature([Bid])],
  providers: [BidsService],
  controllers: [BidsController],
  exports: [BidsService],
})
export class BidsModule {}
