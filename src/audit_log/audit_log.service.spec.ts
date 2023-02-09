import { AuditLogService } from "./audit_log.service";

describe("AuditLogService", () => {
  it("creates", () => {
    const s = new AuditLogService();
    expect(s.create({} as any).id).toBe(1);
  });
});
