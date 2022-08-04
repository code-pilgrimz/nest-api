import { ProjectService } from "./project.service";

describe("ProjectService", () => {
  it("creates", () => {
    const s = new ProjectService();
    expect(s.create({} as any).id).toBe(1);
  });
});
