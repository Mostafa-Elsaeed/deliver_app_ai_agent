import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WalletsService } from "./wallets.service";
import { UpdateWalletDto } from "./dto/update-wallet.dto";

@ApiTags("Wallets")
@Controller("wallets")
export class WalletsController {
  constructor(private wallets: WalletsService) {}

  @Get(":user_id")
  @ApiOperation({ summary: "Get wallet by user ID" })
  @ApiResponse({ status: 200, description: "Return wallet details" })
  async get(@Param("user_id") user_id: string) {
    const w = await this.wallets.findByUser(user_id);
    return w ?? this.wallets.ensure(user_id);
  }

  @Patch(":user_id")
  @ApiOperation({ summary: "Update wallet balance" })
  @ApiResponse({ status: 200, description: "Wallet successfully updated" })
  update(@Param("user_id") user_id: string, @Body() body: UpdateWalletDto) {
    return this.wallets.update(user_id, body);
  }
}
