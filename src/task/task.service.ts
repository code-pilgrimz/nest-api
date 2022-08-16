import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
  private items: Task[] = [];
  private seq = 1;

  findAll(): Task[] { return this.items; }

  findOne(id: number): Task {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateTaskDto): Task {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
