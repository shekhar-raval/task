import { CreateTreeDTO } from './dto/tree.dto';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TreeService } from "./family-tree.service";
import { ITree } from './interfaces/tree.interface';
import { ParamsID } from './../members/dto/create-member.dto';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get()
  async GetTree(): Promise<ITree[]> {
    return await this.treeService.list();
  }

  @Post()
  async CreateTree(@Body() data: CreateTreeDTO): Promise<ITree> {
    return await this.treeService.create(data);
  }

  @Delete(':id')
  async DeleteTree(@Param() { id }: ParamsID): Promise<ITree> {
    return await this.treeService.delete(id);
  }
}