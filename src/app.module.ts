import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule], // 다른 모듈 가져오기
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
