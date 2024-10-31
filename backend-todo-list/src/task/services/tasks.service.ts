import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../db/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';
import { UsersService } from 'src/user/services/users.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly usersService: UsersService,
  ) {}

  async create(body: CreateTaskDto): Promise<Task> {
    const owner = await this.usersService.findOne(body.userId);
    if (!owner) throw new NotFoundException("The specified user doesn't exist");

    const newTask = this.taskRepository.create({ ...body, user: owner });
    return await this.taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  async update(id: number, body: UpdateTaskDto): Promise<Task> {
    return this.taskRepository.save({ id, ...body });
  }
}
