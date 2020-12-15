import { Controller, Get } from '@nestjs/common';

import { TestService } from '@dp/shared-nest-library';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly testService: TestService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('test')
  getDataFromTest() {
    return this.testService.getData();
  }
}
