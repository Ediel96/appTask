import { Module } from '@nestjs/common';
import { TaskInfoController } from './task-info.controller';
import { ITaskInfoService } from './services/task-info.service';
import { TaskInfoService } from './impl/task-info-services.impl';

@Module({
  controllers: [TaskInfoController],
  providers: [
    {provide: ITaskInfoService , useClass: TaskInfoService }
  ]
})
export class ControllerModule {}
