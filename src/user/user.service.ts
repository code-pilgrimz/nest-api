import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  private items: User[] = [];
  private seq = 1;

  findAll(): User[] { return this.items; }

  findOne(id: number): User {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateUserDto): User {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
// check perf here
// TODO clean this
