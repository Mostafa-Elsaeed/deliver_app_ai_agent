import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column() orderId!: string;
  @Column() reviewerId!: string;
  @Column('int') rating!: number;
  @Column('text', { nullable: true }) comment?: string;
  @CreateDateColumn() created_at!: Date;
}
