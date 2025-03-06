import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() cat) {
    this.catsService.create(cat);
    return { message: "Cat created" };
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.catsService.findOne(id);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    const result = this.catsService.delete(id);
    if (result) {
      return { message: "Cat deleted successfully" };
    } else {
      return { message: "Cat not found" };
    }
  }
}
