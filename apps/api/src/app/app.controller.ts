import { Controller, Get } from '@nestjs/common';

import { Message } from '@dp/api-interfaces';
import { TestService } from '@dp/shared-nest-library';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly testService: TestService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('test')
  getDataFromTest() {
    return this.testService.getData();
  }
}
