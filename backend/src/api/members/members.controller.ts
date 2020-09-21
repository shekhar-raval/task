import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { IMember } from './interfaces/member.interface';
import { MemberService } from "./member.service";
import { CreateMemberDTO, ParamsID } from './dto/create-member.dto';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get(':id')
  async GetMemberofTree(@Param() { id }: ParamsID): Promise<IMember[]> {
    return await this.memberService.list(id);
  }

  @Post()
  async CreateMember(@Body() data: CreateMemberDTO): Promise<IMember> {
    return await this.memberService.create(data)
  }

  @Put(':id')
  async UpdateMember(@Param() { id }: ParamsID, @Body() data: CreateMemberDTO): Promise<IMember> {
    return await this.memberService.update(id, data)
  }

  @Delete(':id')
  async DeleteMember(@Param() { id }: ParamsID): Promise<IMember> {
    return await this.memberService.delete(id);
  }
}