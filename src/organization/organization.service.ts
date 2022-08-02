import { Injectable, NotFoundException } from "@nestjs/common";
import { Organization } from "./organization.entity";
import { CreateOrganizationDto } from "./dto/create-organization.dto";

@Injectable()
export class OrganizationService {
  private items: Organization[] = [];
  private seq = 1;

  findAll(): Organization[] { return this.items; }

  findOne(id: number): Organization {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateOrganizationDto): Organization {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
// minor wording
// TODO clean this
// TODO clean this
