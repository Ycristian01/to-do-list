import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { User } from '../db/user.entity';
import { CreateUserDto } from '../dtos/user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body);
  }
}
