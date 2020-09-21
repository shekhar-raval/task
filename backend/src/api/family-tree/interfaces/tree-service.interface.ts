import { ITree } from './tree.interface';
import { CreateTreeDTO } from './../dto/tree.dto';

export interface ITreeService {
  create(data: CreateTreeDTO): Promise<ITree>;
  delete(id: string): Promise<ITree>
  list(): Promise<ITree[]>;
}