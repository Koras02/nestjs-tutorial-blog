import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module"; // 경로가 정확한지 확인하세요.

@Module({
  imports: [CatsModule], // CatsModule이 imports 배열에 포함되어 있어야 합니다.
})
export class AppModule {}
