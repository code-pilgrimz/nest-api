import { Injectable, NotFoundException } from "@nestjs/common";
import { AuditLog } from "./audit_log.entity";
import { CreateAuditLogDto } from "./dto/create-audit_log.dto";

@Injectable()
export class AuditLogService {
  private items: AuditLog[] = [];
  private seq = 1;

  findAll(): AuditLog[] { return this.items; }

  findOne(id: number): AuditLog {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateAuditLogDto): AuditLog {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
