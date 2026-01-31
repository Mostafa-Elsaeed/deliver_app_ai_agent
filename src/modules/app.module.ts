import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { WalletsModule } from './wallets/wallets.module';
import { MessagesModule } from './messages/messages.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BidsModule } from './bids/bids.module';
import { EventsModule } from '../realtime/events.module';
import { ConfigModule } from '@nestjs/config';

// const isDbUrl = !!process.env.DATABASE_URL;
// console.log(process.env);
@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true, // 👈 VERY IMPORTANT
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
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
})
export class AppModule {}
