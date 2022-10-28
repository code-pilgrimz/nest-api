import { Injectable, NotFoundException } from "@nestjs/common";
import { Payment } from "./payment.entity";
import { CreatePaymentDto } from "./dto/create-payment.dto";

@Injectable()
export class PaymentService {
  private items: Payment[] = [];
  private seq = 1;

  findAll(): Payment[] { return this.items; }

  findOne(id: number): Payment {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreatePaymentDto): Payment {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
