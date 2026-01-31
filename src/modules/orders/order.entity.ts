import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum OrderStatus {
  CREATED = 'CREATED',
  ASSIGNED = 'ASSIGNED',
  PICKED_UP = 'PICKED_UP',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('float', { default: 0 })
  price!: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', default: OrderStatus.CREATED })
  status!: OrderStatus;

  @Column({ nullable: true })
  storeId?: string;

  @Column({ nullable: true })
  deliveryGuyId?: string;

  @Column({ default: false })
  storeDeposited!: boolean;

  @Column({ default: false })
  riderDeposited!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
