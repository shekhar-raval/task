import { Module } from "@nestjs/common";

import { FamilyTreeModule } from "./family-tree/family-tree.module";
import { MembersModule } from "./members/members.module";

@Module({
  imports: [MembersModule, FamilyTreeModule],
  exports: [MembersModule, FamilyTreeModule]
})
export class ApiModule {}