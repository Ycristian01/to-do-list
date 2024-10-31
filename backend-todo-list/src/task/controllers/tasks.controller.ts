import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from '../services/tasks.service';
import { Task } from '../db/task.entity';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body() body: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(body);
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, body);
  }
}
