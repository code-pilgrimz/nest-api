import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";

@Controller("payments")
export class PaymentController {
  constructor(private readonly service: PaymentService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreatePaymentDto) { return this.service.create(dto); }
}
