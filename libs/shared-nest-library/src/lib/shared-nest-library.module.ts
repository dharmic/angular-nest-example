import { Module } from '@nestjs/common';
import { TestService } from './test/test.service';

@Module({
  controllers: [],
  providers: [TestService],
  exports: [TestService],
})
export class SharedNestLibraryModule {}
