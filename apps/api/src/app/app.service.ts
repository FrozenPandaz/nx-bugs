import { Injectable } from '@nestjs/common';
import { Message } from '@test7/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
