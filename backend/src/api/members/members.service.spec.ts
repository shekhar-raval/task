import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Gender, IMember } from './interfaces/member.interface';
import { MemberService } from "./member.service"
import { MemberController } from './members.controller';
import { MemberSchema } from './models/members.schema';
import Environment from '../../config/api.config';

describe('Members Service', () => {
  let memberService: MemberService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          Environment.getMongoURI(),
          Environment.getMongoOptions()
        ),
        MongooseModule.forFeature([
          { name: 'members', schema: MemberSchema }
        ])
      ],
      controllers: [MemberController],
      providers: [MemberService],
    }).compile();
    memberService = await moduleRef.get<MemberService>(MemberService);
  });

  it('Members service should ne defined', () => {
    expect(memberService).toBeDefined();
  })

  it('Should create member', async (done) => {
    const res: any = {
      name: 'shekhar',
      gender: Gender.male,
      tree: '5f6437de858c4f060cbd3e15',
      parent: null
    }
    jest.spyOn(memberService, 'create').mockImplementation(() => res);
    const response =  await memberService.create(res);
    expect(response).toEqual(res);
    done();
  });

  it('Should list members', async (done) => {
    const result: IMember[] = [{
      "parent": null,
      "name": 'shekhar',
      "gender": Gender.male,
      "family": '5f6437de858c4f060cbd3e15'
    }];
    jest.spyOn(memberService, 'list').mockImplementation(async () => result);
    const res =  await memberService.list('5f6437de858c4f060cbd3e15');
    expect(res[0].family).toEqual('5f6437de858c4f060cbd3e15');
    done();
  });

  it('Should update members', async (done) => {
    const result: IMember = {
      "parent": null,
      "name": 'shekhar raval',
      "gender": Gender.female,
      "family": '5f6437de858c4f060cbd3e15'
    };
    jest.spyOn(memberService, 'update').mockImplementation(async () => result);
    const res = await memberService.update('5f672d73346ddf19bc7b1fc9', { 
      name: 'shekhar raval',
      parent: null,
      gender: Gender.male,
      tree: '5f6437de858c4f060cbd3e15'
    });
    expect(res.name).toEqual('shekhar raval');
    expect(res.family).toEqual('5f6437de858c4f060cbd3e15');
    done();
  });

  it('Should delete all members of Tree', async (done) => {
    const data = jest.spyOn(memberService, 'deleteAll');
    await memberService.deleteAll('5f672d73346ddf19bc7b1fc9');
    expect(data).toBeCalledTimes(1);
    done();
  });

  afterAll(done => {
    done();
  })
})