import { NotificationService } from "./notification.service";

describe("NotificationService", () => {
  it("creates", () => {
    const s = new NotificationService();
    expect(s.create({} as any).id).toBe(1);
  });
});
