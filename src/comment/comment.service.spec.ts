import { CommentService } from "./comment.service";

describe("CommentService", () => {
  it("creates", () => {
    const s = new CommentService();
    expect(s.create({} as any).id).toBe(1);
  });
});
