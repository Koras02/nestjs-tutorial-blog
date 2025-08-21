import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule], // 다른 모듈 가져오기
})
export class AppModule {}
