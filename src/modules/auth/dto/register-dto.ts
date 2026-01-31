import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RoleEnum } from "src/modules/users/role.enum";


export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    role: RoleEnum;
}