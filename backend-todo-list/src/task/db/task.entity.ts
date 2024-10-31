import { User } from 'src/user/db/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 2000 })
  description: string;

  @Column({ default: 0 })
  status: number;

  @Column()
  dueDate: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
