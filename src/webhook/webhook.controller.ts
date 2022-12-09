import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import { CreateWebhookDto } from "./dto/create-webhook.dto";

@Controller("webhooks")
export class WebhookController {
  constructor(private readonly service: WebhookService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateWebhookDto) { return this.service.create(dto); }
}
