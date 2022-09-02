import { Injectable, NotFoundException } from "@nestjs/common";
import { Comment } from "./comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentService {
  private items: Comment[] = [];
  private seq = 1;

  findAll(): Comment[] { return this.items; }

  findOne(id: number): Comment {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateCommentDto): Comment {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
