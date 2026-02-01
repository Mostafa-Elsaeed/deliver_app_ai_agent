import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RoleEnum } from "../../users/role.enum";

export class RegisterDto {
  @ApiProperty({
    example: "user@example.com",
    description: "The email of the user",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "John Doe", description: "The name of the user" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "password123",
    description: "The password of the user",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    enum: RoleEnum,
    example: RoleEnum.RIDER,
    description: "The role of the user",
  })
  @IsString()
  @IsNotEmpty()
  role: RoleEnum;
}
