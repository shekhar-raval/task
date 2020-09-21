import { PipeTransform, ArgumentMetadata, BadRequestException, HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {

    if (!value) {
      throw new BadRequestException('No data submitted');
    }

    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new HttpException({ message: 'Validation Failed', errors: this.buildError(errors) }, HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private buildError(errors) {
    try {
      const result = {};
      errors.forEach(el => {
        result[el.property] = el.constraints
        if (el.children?.length) {
          el.children.forEach(element => {
            result[element.property] = element.constraints
          });
        }
      });
      return result;
    } catch (error) {
      return error
    }
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}