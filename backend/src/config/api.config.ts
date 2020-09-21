import * as dotenv from 'dotenv';
import { MongooseModuleOptions } from '@nestjs/mongoose';

dotenv.config();

class AppConfig {
  constructor(private readonly env: { [key: string]: string | undefined }) { }

  getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key]
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env ${key}`);
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction(): boolean {
    const mode = this.getValue('NODE_ENV', false);
    return mode === 'production';
  }

  public getEnv(): string {
    return this.getValue('NODE_ENV', true);
  }

  public getMongoURI(): string {
    return this.getValue('MONGO_URI', true);
  }

  public getMongoOptions(): MongooseModuleOptions {
    return {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    };
  }
}

const Environment = new AppConfig(process.env).ensureValues([
  'NODE_ENV',
  'PORT',
  'MONGO_URI'
]);

export default Environment;