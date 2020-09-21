import { Document } from 'mongoose';

export interface ITree extends Document {
  name: string;
}