import { Gender } from './../../members/interfaces/member.interface';
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTreeDTO {
  @IsString()
  @IsNotEmpty()
  familyName: string;

  @IsString()
  @IsNotEmpty()
  headPerson: string;

  @IsEnum(Gender, { message: 'Enter valid gender'})
  @IsNotEmpty()
  gender: Gender;
}