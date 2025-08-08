import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class updateuserDTO{

    @IsString()
    @IsOptional()
    username : string

    @IsString()
    @IsOptional()
    displayname? : string

    @IsString()
    @IsNotEmpty()
    email : string



}