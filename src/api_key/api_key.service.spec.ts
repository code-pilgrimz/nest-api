import { ApiKeyService } from "./api_key.service";

describe("ApiKeyService", () => {
  it("creates", () => {
    const s = new ApiKeyService();
    expect(s.create({} as any).id).toBe(1);
  });
});
