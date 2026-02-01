import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private users: UsersService) {}

  @Get(":id")
  @ApiOperation({ summary: "Get public user profile" })
  @ApiResponse({ status: 200, description: "Return user profile" })
  getUser(@Param("id") id: string) {
    return this.users.findPublicById(id);
  }
}
