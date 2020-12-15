import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SharedNestLibraryModule } from '@dp/shared-nest-library';

@Module({
  imports: [SharedNestLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
