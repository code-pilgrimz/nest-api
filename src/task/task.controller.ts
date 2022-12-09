import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateTaskDto) { return this.service.create(dto); }
}
// minor wording
// revisit later
// minor wording
