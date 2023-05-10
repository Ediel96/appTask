import { Controller, Post, HttpCode, HttpStatus, Body, Get, Param, Query, Patch, Delete, Put } from '@nestjs/common';
import { ITaskInfoService } from './services/task-info.service';
import { CreateTaskDto } from './dto/task/create-task.dto';
import { UpdateTaskDto } from './dto/task/update-task.dto';

@Controller('task-info')
export class TaskInfoController {


  constructor(private readonly taskInfoService : ITaskInfoService){}
    
    @Post()
    @HttpCode( HttpStatus.OK ) // puedo cambiar el estado
    create(@Body() task: CreateTaskDto) {
      return this.taskInfoService.create(task);
  }

  @Get()
  findAll() {
    return this.taskInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskInfoService.findOne(id);
  }

  @Put(':term')
  update(@Param('term') term: string, @Body() task: UpdateTaskDto) {
    return this.taskInfoService.update(term, task);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskInfoService.remove(id);
  }
}
