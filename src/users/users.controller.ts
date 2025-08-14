import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { UsersService, User } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAll();
  }

  @Get(":id")
  getOneUser(@Param("id") id: string): User | { error: string } {
    const user = this.usersService.getOne(Number(id));
    return user || { error: "User not found" };
  }

  @Post()
  createUser(@Body("name") name: string, @Body("email") email: string): User {
    return this.usersService.create(name, email);
  }

  @Put(":id")
  updateUser(
    @Param("id") id: string,
    @Body("name") name?: string,
    @Body("email") email?: string,
  ): User | { error: string } {
    const updated = this.usersService.update(Number(id), name, email);
    return updated || { error: "User Not Found" };
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string): { message: string } {
    const deleted = this.usersService.delete(Number(id));
    return deleted
      ? { message: "User deleted" }
      : { message: "User not found" };
  }
}
