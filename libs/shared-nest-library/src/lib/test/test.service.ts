import { Injectable } from '@nestjs/common';
import { Message } from '@dp/api-interfaces';

@Injectable()
export class TestService {
  getData(): Message {
    return { message: 'Welcome to test!' };
  }
}
