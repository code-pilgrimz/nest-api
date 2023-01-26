export class CreateAuditLogDto {
  action: string;
  actor_id: number;
  target: string;
}
