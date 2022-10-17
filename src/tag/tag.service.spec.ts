import { TagService } from "./tag.service";

describe("TagService", () => {
  it("creates", () => {
    const s = new TagService();
    expect(s.create({} as any).id).toBe(1);
  });
});
// left a note for myself
