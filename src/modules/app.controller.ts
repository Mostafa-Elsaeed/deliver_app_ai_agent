import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("health")
  healthCheck() {
    console.log("Health check");
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
