import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import Environment from './config/api.config';

@Module({
  imports: [
    MongooseModule.forRoot(
      Environment.getMongoURI(), 
      Environment.getMongoOptions()
    ),
    ApiModule
  ]
})
export class AppModule {}
