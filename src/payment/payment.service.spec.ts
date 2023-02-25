import { PaymentService } from "./payment.service";

describe("PaymentService", () => {
  it("creates", () => {
    const s = new PaymentService();
    expect(s.create({} as any).id).toBe(1);
  });
});
// wip: flaky-test
