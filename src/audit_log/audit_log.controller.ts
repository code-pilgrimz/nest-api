import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { AuditLogService } from "./audit_log.service";
import { CreateAuditLogDto } from "./dto/create-audit_log.dto";

@Controller("audit_logs")
export class AuditLogController {
  constructor(private readonly service: AuditLogService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateAuditLogDto) { return this.service.create(dto); }
}
