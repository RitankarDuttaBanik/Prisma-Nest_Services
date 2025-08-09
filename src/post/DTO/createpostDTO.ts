import { IsNotEmpty, IsNumber, IsString , MaxLength} from "class-validator"

export class createpostDTO  {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    title : string

    @IsString()
    @IsNotEmpty()
    description : string

    @IsNumber()
    @IsNotEmpty()
    userId : number

    
}