import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./modules/app.module";
import { ConfigService } from "./modules/config/config.service";

import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
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
    origin: ["https://main.d2wsuf2xq3gl7t.amplifyapp.com"],
    credentials: true,
  });

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger is running on: http://localhost:${port}/docs`);
}
bootstrap();
