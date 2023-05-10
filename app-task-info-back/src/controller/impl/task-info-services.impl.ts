import { Injectable } from '@nestjs/common';
import { ITaskInfoService } from '../services/task-info.service';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { UpdateTaskDto } from '../dto/task/update-task.dto';

@Injectable()
export class TaskInfoService implements ITaskInfoService {

    
    create(task: CreateTaskDto) {
        return 'method create()';
    }

    findAll() {
        return 'method findAll()';
    }

    findOne(id: string) {
        return 'method findOne()';
    }

    update(id: string, task: UpdateTaskDto) {
            return 'method update()';
    }
    
    remove(id: string) {
        return 'method remove()';
    }

}