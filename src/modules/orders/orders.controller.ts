import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { OrderStatus } from "./order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";

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

  @Post()
  @ApiOperation({ summary: "Create a new order" })
  @ApiResponse({ status: 201, description: "Order successfully created" })
  create(@Body() body: CreateOrderDto) {
    return this.orders.create(body);
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
