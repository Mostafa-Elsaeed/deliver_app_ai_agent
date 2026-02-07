import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./modules/app.module";
import { ConfigService } from "./modules/config/config.service";

import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const configService = app.get(ConfigService);
  const port = configService.app.port;
  console.log(`Port: ${port}`);
  const config = new DocumentBuilder()
    .setTitle("Delivery App API")
    .setDescription("The Delivery App API description")
    .setVersion("1.0")
    .addTag("delivery")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.enableCors({
    origin: [
      "https://bidrunners.com",
      "https://www.bidrunners.com",
      "http://localhost:3001",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  });

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger is running on: http://localhost:${port}/docs`);
}
bootstrap();
