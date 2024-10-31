import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'clean the room' })
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty({ example: '0 (pending)' })
  @IsOptional()
  status: number;

  @ApiProperty({ example: '01/10/2024' })
  @IsNotEmpty()
  dueDate: Date;

  @ApiProperty({})
  @IsNotEmpty()
  userId: number;
}

export class UpdateTaskDto {
  @ApiProperty({})
  @IsNotEmpty()
  id: number;

  @ApiProperty({ example: 'clean the room' })
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty({ example: '0 (pending)' })
  @IsOptional()
  status: number;

  @ApiProperty({ example: '01/10/2024' })
  @IsOptional()
  dueDate: Date;
}
