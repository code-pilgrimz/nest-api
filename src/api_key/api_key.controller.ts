import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { ApiKeyService } from "./api_key.service";
import { CreateApiKeyDto } from "./dto/create-api_key.dto";

@Controller("api_keys")
export class ApiKeyController {
  constructor(private readonly service: ApiKeyService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateApiKeyDto) { return this.service.create(dto); }
}
// revisit later
