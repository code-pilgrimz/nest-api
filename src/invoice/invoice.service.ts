import { Injectable, NotFoundException } from "@nestjs/common";
import { Invoice } from "./invoice.entity";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";

@Injectable()
export class InvoiceService {
  private items: Invoice[] = [];
  private seq = 1;

  findAll(): Invoice[] { return this.items; }

  findOne(id: number): Invoice {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateInvoiceDto): Invoice {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
