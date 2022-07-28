import { Injectable, NotFoundException } from "@nestjs/common";
import { Project } from "./project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";

@Injectable()
export class ProjectService {
  private items: Project[] = [];
  private seq = 1;

  findAll(): Project[] { return this.items; }

  findOne(id: number): Project {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateProjectDto): Project {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
