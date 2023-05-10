import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { UpdateTaskDto } from '../dto/task/update-task.dto';

@Injectable()
export abstract class ITaskInfoService {

    create(task: CreateTaskDto){}

    findAll(){}

    findOne(id : string){}

    update(id : string, task: UpdateTaskDto){}

    remove(id: string){}

}
