import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../db/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(body);

    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
