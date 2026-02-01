import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum OrderStatus {
  CREATED = "CREATED",
  BIDDING = "BIDDING",
  ASSIGNED = "ASSIGNED",
  PICKED_UP = "PICKED_UP",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  productName!: string;

  @Column("float", { default: 0 })
  productPrice!: number;

  @Column("float", { default: 0 })
  suggestedDeliveryFee!: number;

  @Column()
  destination!: string;

  @Column()
  clientName!: string;

  @Column()
  clientPhone!: string;

  @Column({ nullable: true })
  storeName?: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "varchar", default: OrderStatus.CREATED })
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
