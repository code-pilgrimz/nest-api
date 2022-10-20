import { InvoiceService } from "./invoice.service";

describe("InvoiceService", () => {
  it("creates", () => {
    const s = new InvoiceService();
    expect(s.create({} as any).id).toBe(1);
  });
});
