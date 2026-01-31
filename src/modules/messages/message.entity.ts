import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column() senderId!: string;
  @Column() recipientId!: string;
  @Column('text') content!: string;
  @CreateDateColumn() timestamp!: Date;
}
