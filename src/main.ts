import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 필드 제거
      forbidNonWhitelisted: true, // 정의되지 않은 필드가 있으면 에러
      transform: true, // 자동 타입 변환 (string -> number)
    }),
  );
  await app.listen(3000);
}

bootstrap();
