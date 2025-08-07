import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaServices } from 'src/Prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma : PrismaServices){}

    createUser(createuser : Prisma.UserCreateInput){
            return this.prisma.user.create({data : createuser})
    }

    getUser(){}

    getUserById(){}


}
