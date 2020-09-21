import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { ITree } from './interfaces/tree.interface';
import { ITreeService } from './interfaces/tree-service.interface';
import { CreateTreeDTO } from "./dto/tree.dto";
import { MemberService } from "../members/member.service";

@Injectable()
export class TreeService implements ITreeService {
  constructor(
    @InjectModel('trees') private readonly model: Model<ITree>,
    private readonly memberService: MemberService,
  ) {}
  
  async list(): Promise<ITree[]> {
    const family = await this.model.find();
    return family;
  }

  async create(data: CreateTreeDTO): Promise<ITree> {
    const tree = new this.model({ familyName: data.familyName });
    const res = await tree.save();
    await this.memberService.create({ 
      name: data.headPerson, 
      gender: data.gender, 
      tree: res._id,
      parent: null 
    })
    return res;
  }
  async delete(id: string): Promise<ITree> {
    await this.memberService.deleteAll(id);
    return await this.model.findByIdAndDelete(id);
  }
}