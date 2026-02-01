import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";

@ApiTags("Reviews")
@Controller("reviews")
export class ReviewsController {
  constructor(private reviews: ReviewsService) {}

  @Get()
  @ApiOperation({ summary: "List reviews" })
  @ApiResponse({ status: 200, description: "Return list of reviews" })
  list() {
    return this.reviews.list();
  }

  @Post()
  @ApiOperation({ summary: "Create a review" })
  @ApiResponse({ status: 201, description: "Review successfully created" })
  create(@Body() body: CreateReviewDto) {
    return this.reviews.create(body);
  }
}
