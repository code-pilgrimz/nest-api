import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { TagService } from "./tag.service";
import { CreateTagDto } from "./dto/create-tag.dto";

@Controller("tags")
export class TagController {
  constructor(private readonly service: TagService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateTagDto) { return this.service.create(dto); }
}
// tidy up
