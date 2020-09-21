import { ExceptionFilter, ArgumentsHost, HttpStatus, Logger } from "@nestjs/common";

const logger = new Logger('Http-Exception');

export class HttpExceptionFilter implements ExceptionFilter {

  catch(error: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    logger.error(`Error :: ${error}`)
    
    if (error.getStatus() === HttpStatus.UNAUTHORIZED) {
      if (typeof error.response !== 'string') {
        error.response.message = error.response.message || 'UNAUTHORIZED';
      }
    }
    res.status(error.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: error.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.response.message || error.message,
      errors: error.response.errors || null,
      path: req ? req.url : null,
    });
  }

}