import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

import { ValidationPipe } from './shared/pipe/validation.pipe';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import Environment from './config/api.config';

const logger = new Logger('main.ts');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({ origin: true });

  // Set Api version
  app.setGlobalPrefix('/api/v1');

  // Secure Http Headers
  app.use(helmet());

  // Setting validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Global Http Exception Filters
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(Environment.getPort());

  logger.debug(`Family-Tree in ${Environment.getEnv()} mode is listening to ${Environment.getPort()}`)
}
bootstrap();
