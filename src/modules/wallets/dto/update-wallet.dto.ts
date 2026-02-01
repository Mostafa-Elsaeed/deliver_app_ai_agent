import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class UpdateWalletDto {
  @ApiProperty({
    example: 100,
    description: "The new balance of the wallet",
    minimum: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  balance: number;
}
