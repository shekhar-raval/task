import { Types, Document } from 'mongoose';

export enum Gender {
  male = 'male',
  female = 'female'
}

export interface IMember extends Document {
  name: string;
  gender: Gender;
  parent: Types.ObjectId | null;
  family: Types.ObjectId
}