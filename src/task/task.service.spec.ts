import { TaskService } from "./task.service";

describe("TaskService", () => {
  it("creates", () => {
    const s = new TaskService();
    expect(s.create({} as any).id).toBe(1);
  });
});
