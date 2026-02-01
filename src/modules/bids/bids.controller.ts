import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BidsService } from "./bids.service";
import { CreateBidDto } from "./dto/create-bid.dto";

@ApiTags("Bids")
@Controller("bids")
export class BidsController {
  constructor(private bids: BidsService) {}

  @Get()
  @ApiOperation({ summary: "List bids" })
  @ApiResponse({ status: 200, description: "Return list of bids" })
  list(@Query("orderId") orderId?: string) {
    return this.bids.list(orderId);
  }

  @Post()
  @ApiOperation({ summary: "Create a bid" })
  @ApiResponse({ status: 201, description: "Bid successfully created" })
  create(@Body() body: CreateBidDto) {
    return this.bids.create(body);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a bid" })
  @ApiResponse({ status: 200, description: "Bid successfully updated" })
  update(@Param("id") id: string, @Body() body: any) {
    return this.bids.update(id, body);
  }
}
