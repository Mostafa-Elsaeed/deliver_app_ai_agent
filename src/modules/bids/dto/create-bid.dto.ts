import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBidDto {
  @ApiProperty({ example: "order-uuid", description: "The ID of the order" })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    example: "user-uuid",
    description: "The ID of the user (rider)",
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 10.5, description: "The bid amount" })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
