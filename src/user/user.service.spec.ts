import { UserService } from "./user.service";

describe("UserService", () => {
  it("creates", () => {
    const s = new UserService();
    expect(s.create({} as any).id).toBe(1);
  });
});
// revisit later
