import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe,HttpException, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { createuserDTO } from './DTO/createuserDTO';
import { updateuserDTO } from './DTO/updateuserDTO';


@Controller('user')
export class UserController {
    constructor(private userservice : UserService){}

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createuserDTO : createuserDTO){
        return this.userservice.createUser(createuserDTO)
    }

    @Get()
    getUsers(){
        return this.userservice.getUser()
    }

    @Get(':id')
    async getUsersById(@Param('id', ParseIntPipe) id : number){
        const user = await this.userservice.getUserById(id);
        if(!user){
            throw new HttpException('User not found', 404);
        }
        return user
    }

    @Patch(':id')
    async UpdateUserById(@Param('id', ParseIntPipe) id : number, @Body() updateuserDTO : updateuserDTO){
        return this.userservice.updateUserByid(id,updateuserDTO);
    }

    @Delete(':id')
    async DeleteUserById(@Param('id', ParseIntPipe ) id : number){
        return this.userservice.deleteUser(id);
    }
}
    

