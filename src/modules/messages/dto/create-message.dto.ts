import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {


  @ApiProperty({
    example: "recipient-uuid",
    description: "The ID of the recipient",
  })
  @IsString()
  @IsNotEmpty()
  recipientId: string;

  @ApiProperty({
    example: "Hello, world!",
    description: "The content of the message",
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
