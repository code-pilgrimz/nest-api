import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";

@Controller("projects")
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateProjectDto) { return this.service.create(dto); }
}
