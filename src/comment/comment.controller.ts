import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller("comments")
export class CommentController {
  constructor(private readonly service: CommentService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateCommentDto) { return this.service.create(dto); }
}
