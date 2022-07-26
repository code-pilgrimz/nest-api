import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { OrganizationService } from "./organization.service";
import { CreateOrganizationDto } from "./dto/create-organization.dto";

@Controller("organizations")
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateOrganizationDto) { return this.service.create(dto); }
}
// tidy up
