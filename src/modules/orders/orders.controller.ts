import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Req,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { OrderStatus } from "./order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@ApiTags("Orders")
@Controller("orders")
export class OrdersController {
  constructor(private orders: OrdersService) {}

  @Get()
  @ApiOperation({ summary: "List all orders" })
  @ApiResponse({ status: 200, description: "Return list of orders" })
  list() {
    return this.orders.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: "Create a new order" })
  @ApiResponse({ status: 201, description: "Order successfully created" })
  create(@Body() body: CreateOrderDto, @Req() req: any) {
    console.log("order request");
    const storeId = req.user.sub;
    return this.orders.create({ ...body, storeId });
  }

  @Get(":id")
  @ApiOperation({ summary: "Get order by ID" })
  @ApiResponse({ status: 200, description: "Return order details" })
  get(@Param("id") id: string) {
    return this.orders.findOne(id);
  }

  @Patch(":id/status")
  setStatus(@Param("id") id: string, @Body() body: { status: OrderStatus }) {
    return this.orders.update(id, { status: body.status });
  }
}
