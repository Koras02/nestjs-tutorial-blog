import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "src/api/create-user-dto";

@Controller("users")
export class UsersController {
  private users = [];

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    this.users.push(CreateUserDto);
    // createUserDto는 이미 유효성 검사를 거친 데이터임
    return {
      message: "User Created",
      data: CreateUserDto,
    };
  }

  @Get()
  findAll() {
    return this.users;
  }
}
