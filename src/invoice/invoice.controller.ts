import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { InvoiceService } from "./invoice.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";

@Controller("invoices")
export class InvoiceController {
  constructor(private readonly service: InvoiceService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateInvoiceDto) { return this.service.create(dto); }
}
