import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Gender } from "../interfaces/member.interface";

export class CreateMemberDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Gender, { message: 'Gender can be male or female' })
  gender: Gender;

  @IsMongoId()
  tree: string;

  @IsOptional()
  @IsMongoId()
  parent: string
}

export class ParamsID {
  @IsMongoId()
  id: string;
}