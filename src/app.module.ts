import { Module } from '@nestjs/common';
import apoModules from './api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [...apoModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
