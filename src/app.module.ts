import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrganizationModule } from "./organization/organization.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { CommentModule } from "./comment/comment.module";
import { TagModule } from "./tag/tag.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { PaymentModule } from "./payment/payment.module";
import { NotificationModule } from "./notification/notification.module";
import { WebhookModule } from "./webhook/webhook.module";
import { ApiKeyModule } from "./api_key/api_key.module";
import { AuditLogModule } from "./audit_log/audit_log.module";

@Module({ imports: [UserModule, OrganizationModule, ProjectModule, TaskModule, CommentModule, TagModule, InvoiceModule, PaymentModule, NotificationModule, WebhookModule, ApiKeyModule, AuditLogModule] })
export class AppModule {}
