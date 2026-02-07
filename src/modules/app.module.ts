import { Module } from "@nestjs/common";
import { ConfigService } from "./config/config.service";
// import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { OrdersModule } from "./orders/orders.module";
import { WalletsModule } from "./wallets/wallets.module";
import { MessagesModule } from "./messages/messages.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { BidsModule } from "./bids/bids.module";
import { EventsModule } from "../realtime/events.module";
import { ConfigModule } from "./config/config.module";
import { AppController } from "./app.controller";

// const isDbUrl = !!process.env.DATABASE_URL;
// console.log(process.env);
@Module({
  imports: [
    ConfigModule,
TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.database.type as any,
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.username,
        password: configService.database.password,
        database: configService.database.database,
        autoLoadEntities: true,
        synchronize: configService.app.nodeEnv === 'development',
      }),
    }),
    UsersModule,
    AuthModule,
    OrdersModule,
    WalletsModule,
    MessagesModule,
    ReviewsModule,
    BidsModule,
    EventsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
