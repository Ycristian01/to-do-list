import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { isUnique } from 'src/decorators/validators';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'johndoe@email.com' })
  @IsNotEmpty()
  @IsEmail()
  @isUnique({ tableName: 'users', column: 'email' })
  email: string;

  @ApiProperty({ example: 'secret123' })
  @IsNotEmpty()
  password: string;
}
