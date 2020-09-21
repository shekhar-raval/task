import { MembersModule } from './../members/members.module';
import { Test } from '@nestjs/testing';
import { MongooseModule } from "@nestjs/mongoose";

import { TreeSchema } from './models/tree.schema';
import { TreeService } from './family-tree.service';
import { TreeController } from './family-tree.controller';
import Environment from "../../config/api.config";
import { ITree } from './interfaces/tree.interface';
import { Gender } from '../members/interfaces/member.interface';

describe('Tree Service', () => {
  let treeService: TreeService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          Environment.getMongoURI(),
          Environment.getMongoOptions()
        ),
        MongooseModule.forFeature([
          { name: 'trees', schema: TreeSchema }
        ]),
        MembersModule
      ],
      controllers: [TreeController],
      providers: [TreeService],
    }).compile();
    treeService = await moduleRef.get<TreeService>(TreeService);
  });

  it('Tree service should ne defined', () => {
    expect(treeService).toBeDefined();
  });

  it('Should create tree', async (done) => {
    const result: ITree = { name: 'shekhar' };
    jest.spyOn(treeService, 'create').mockImplementation(async () => result);
    const res = await treeService.create({ 
      familyName: 'shekhar-family', 
      headPerson: 'shekhar', 
      gender: Gender.male 
    });
    expect(res.name).toEqual('shekhar');
    done();
  });

  it('Should delete tree', async (done) => {
    jest.spyOn(treeService, 'delete').mockImplementation((): any => {
      return { _id: '5f6437de858c4f060cbd3e15' }
    });
    const res: any = await treeService.delete('5f6437de858c4f060cbd3e15');
    expect(res._id).toEqual('5f6437de858c4f060cbd3e15');
    done();
  });

})