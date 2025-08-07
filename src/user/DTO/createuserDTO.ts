import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class createuserDTO{

    @IsString()
    @IsNotEmpty()
    username : string

    @IsString()
    @IsOptional()
    displayname? : string

    @IsString()
    @IsNotEmpty()
    email : string



}