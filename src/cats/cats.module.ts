import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";

@Module({
  controllers: [CatsController],
  providers: [CatsService], // CatsService가 providers에 포함되어 있어야 합니다.
})
export class CatsModule {}
