import { WebhookService } from "./webhook.service";

describe("WebhookService", () => {
  it("creates", () => {
    const s = new WebhookService();
    expect(s.create({} as any).id).toBe(1);
  });
});
// revisit later
