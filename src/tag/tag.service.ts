import { Injectable, NotFoundException } from "@nestjs/common";
import { Tag } from "./tag.entity";
import { CreateTagDto } from "./dto/create-tag.dto";

@Injectable()
export class TagService {
  private items: Tag[] = [];
  private seq = 1;

  findAll(): Tag[] { return this.items; }

  findOne(id: number): Tag {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateTagDto): Tag {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
// revisit later
