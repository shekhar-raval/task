import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { IMember } from './interfaces/member.interface';
import { IMemberService } from './interfaces/member-service.interface';
import { CreateMemberDTO } from "./dto/create-member.dto";

@Injectable()
export class MemberService implements IMemberService {
  constructor(@InjectModel('members') private readonly model: Model<IMember>) {}
  
  async create(data: CreateMemberDTO): Promise<IMember> {
    const member = new this.model(data);
    const res = await member.save();
    return res;
  }

  async update(id: string, data: CreateMemberDTO): Promise<IMember> {
    const member = await this.model.findByIdAndUpdate(id, { $set: { ...data } }, { new: true });
    if (!member) throw new HttpException('Error updating member', HttpStatus.INTERNAL_SERVER_ERROR);
    return member;
  }

  async delete(id: string): Promise<IMember> {
    const member = await this.model.findByIdAndDelete(id);
    if (!member) throw new HttpException('Error deleting member', HttpStatus.INTERNAL_SERVER_ERROR);
    return member;
  }

  async list(id: string): Promise<IMember[]> {
    const members = await this.model.find({ tree: id });
    return members;
  }

  async deleteAll(id: string): Promise<void> {
    await this.model.deleteMany({ tree: id });
  }
}