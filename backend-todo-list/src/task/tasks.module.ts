import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './db/task.entity';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { UsersService } from 'src/user/services/users.service';
import { User } from 'src/user/db/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  providers: [TasksService, UsersService],
  controllers: [TasksController],
})
export class TasksModule {}
