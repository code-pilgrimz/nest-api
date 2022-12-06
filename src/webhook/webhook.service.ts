import { Injectable, NotFoundException } from "@nestjs/common";
import { Webhook } from "./webhook.entity";
import { CreateWebhookDto } from "./dto/create-webhook.dto";

@Injectable()
export class WebhookService {
  private items: Webhook[] = [];
  private seq = 1;

  findAll(): Webhook[] { return this.items; }

  findOne(id: number): Webhook {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateWebhookDto): Webhook {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
