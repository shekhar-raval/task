import { CreateMemberDTO } from '../dto/create-member.dto';
import { IMember } from './member.interface';

export interface IMemberService {
  create(data: CreateMemberDTO): Promise<IMember>;
  update(id: string, data: CreateMemberDTO): Promise<IMember>;
  delete(id: string): Promise<IMember>;
  list(id: string): Promise<IMember[]>;
  deleteAll(id: string): Promise<void>
}