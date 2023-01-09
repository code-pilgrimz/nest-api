import { Injectable, NotFoundException } from "@nestjs/common";
import { ApiKey } from "./api_key.entity";
import { CreateApiKeyDto } from "./dto/create-api_key.dto";

@Injectable()
export class ApiKeyService {
  private items: ApiKey[] = [];
  private seq = 1;

  findAll(): ApiKey[] { return this.items; }

  findOne(id: number): ApiKey {
    const found = this.items.find((x) => x.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  create(dto: CreateApiKeyDto): ApiKey {
    const item = { id: this.seq++, ...dto };
    this.items.push(item);
    return item;
  }
}
