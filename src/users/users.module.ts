import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  providers: [UsersService], // Provider 등록
  controllers: [UsersController],
  exports: [UsersService], // 다른 모듈에서 사용할 경우 exports 피룡
})
export class UsersModule {}
