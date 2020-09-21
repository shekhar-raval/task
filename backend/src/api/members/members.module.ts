import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";

import { MemberSchema } from './models/members.schema';
import { MemberController } from './members.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'members', schema: MemberSchema }
    ])
  ],
  controllers: [MemberController],
  exports: [MemberService],
  providers: [MemberService],
})
export class MembersModule {}