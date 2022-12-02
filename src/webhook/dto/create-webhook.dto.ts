export class CreateWebhookDto {
  url: string;
  event: string;
  active: boolean;
  secret: string;
}
