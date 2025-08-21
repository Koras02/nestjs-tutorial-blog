import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(private readonly userService: UsersService) {} // 자동 주입

  @Get()
  findAll() {
    return this.userService.getUsers();
  }
}
