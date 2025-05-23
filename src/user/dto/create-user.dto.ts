import { IsEmail, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  age?: number;
}
