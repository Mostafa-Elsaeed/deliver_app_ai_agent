import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wallet } from "./wallet.entity";
import { WalletsService } from "./wallets.service";
import { WalletsController } from "./wallets.controller";
import { EventsModule } from "../../realtime/events.module";

@Module({
  imports: [EventsModule, TypeOrmModule.forFeature([Wallet])],
  providers: [WalletsService],
  controllers: [WalletsController],
  exports: [WalletsService],
})
export class WalletsModule {}
