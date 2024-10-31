import { Task } from 'src/task/db/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, unique: true })
  email: string;

  @Column({ length: 500 })
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
