import { IsEmail, Length } from 'class-validator';
export class CreateUserDto {
    @Length(3)
    userName: string;


    @IsEmail()
    email: string;

    @Length(5)
    password: string;
}
