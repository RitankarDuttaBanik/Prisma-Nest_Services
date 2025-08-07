import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { createuserDTO } from './DTO/createuserDTO';

@Controller('user')
export class UserController {
    constructor(private userservice : UserService){}

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createuserDTO : createuserDTO){
        return this.userservice.createUser(createuserDTO)
    }
}
