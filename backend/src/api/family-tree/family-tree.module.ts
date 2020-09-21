import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";

import { TreeSchema } from './models/tree.schema';
import { TreeController } from "./family-tree.controller";
import { TreeService } from "./family-tree.service";

import { MembersModule } from './../members/members.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'trees', schema: TreeSchema }
    ]),
    MembersModule
  ],
  controllers:[TreeController],
  providers:[TreeService],
  exports: [TreeService]
})
export class FamilyTreeModule {}