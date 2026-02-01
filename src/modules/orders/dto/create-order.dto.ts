import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({ example: "Pizza", description: "The title of the order" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 15.99, description: "The price of the order" })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: "Delicious pepperoni pizza",
    description: "Description of the order",
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: "store-uuid",
    description: "The ID of the store",
    required: false,
  })
  @IsString()
  @IsOptional()
  storeId?: string;
}
