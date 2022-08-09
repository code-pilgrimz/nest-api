import { OrganizationService } from "./organization.service";

describe("OrganizationService", () => {
  it("creates", () => {
    const s = new OrganizationService();
    expect(s.create({} as any).id).toBe(1);
  });
});
// tidy up
