import {
  BadRequestException,
  Body,
  HttpCode,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  login(@Body() body) {
    if (body.username === 'admin' && body.password === 'admin') {
      return { message: 'success' };
    } else if (body.username !== 'admin' && body.password !== 'admin') {
      throw new BadRequestException({ message: 'wrong info' });
    } else if (body.username !== 'admin') {
      throw new BadRequestException({ message: 'wrong username' });
    } else if (body.password !== 'admin') {
      throw new BadRequestException({ message: 'wrong password' });
    }
  }
}
