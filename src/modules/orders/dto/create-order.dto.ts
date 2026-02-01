import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { OrderStatus } from "../order.entity";

export class CreateOrderDto {
  @ApiProperty({
    example: "Wedding Cake",
    description: "The product name of the order",
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({ example: 15.99, description: "The price of the product" })
  @IsNumber()
  @IsNotEmpty()
  productPrice: number;

  @ApiProperty({ example: 5.0, description: "Suggested delivery fee" })
  @IsNumber()
  @IsNotEmpty()
  suggestedDeliveryFee: number;

  @ApiProperty({ example: "123 Main St", description: "Destination address" })
  @IsString()
  @IsNotEmpty()
  destination: string;

  @ApiProperty({ example: "John Doe", description: "Client name" })
  @IsString()
  @IsNotEmpty()
  clientName: string;

  @ApiProperty({ example: "+123456789", description: "Client phone number" })
  @IsString()
  @IsNotEmpty()
  clientPhone: string;

  @ApiProperty({ example: "My Store", description: "Name of the store" })
  @IsString()
  @IsNotEmpty()
  storeName: string;

  @ApiProperty({
    example: "BIDDING",
    description: "Initial status of the order",
  })
  @IsString()
  @IsOptional()
  status?: OrderStatus;

  @ApiProperty({
    example: "Delicious cake",
    description: "Description of the order",
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
