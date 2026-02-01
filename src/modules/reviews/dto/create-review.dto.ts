import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export class CreateReviewDto {
  @ApiProperty({
    example: "order-uuid",
    description: "The ID of the order being reviewed",
  })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    example: "reviewer-uuid",
    description: "The ID of the user creating the review",
  })
  @IsString()
  @IsNotEmpty()
  reviewerId: string;

  @ApiProperty({
    example: 5,
    description: "Rating between 1 and 5",
    minimum: 1,
    maximum: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    example: "Great service!",
    description: "Optional comment about the order",
    required: false,
  })
  @IsString()
  @IsOptional()
  comment?: string;
}
