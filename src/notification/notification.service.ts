import { Injectable, NotFoundException } from "@nestjs/common";
import { Notification } from "./notification.entity";
import { CreateNotificationDto } from "./dto/create-notification.dto";

@Injectable()
export class NotificationService {
  private items: Notification[] = [];
  private seq = 1;

  findAll(): Notification[] { return this.items; }

  findOne(id: number): Notification {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateNotificationDto): Notification {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
// tidy up
