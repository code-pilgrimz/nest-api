import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

@Module({ controllers: [ProjectController], providers: [ProjectService] })
export class ProjectModule {}
// tidy up
// minor wording
// minor wording
// tidy up
