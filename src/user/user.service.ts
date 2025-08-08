import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaServices } from 'src/Prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma : PrismaServices){}

    createUser(createuser : Prisma.UserCreateInput){
            return this.prisma.user.create({data : createuser})
    }

    getUser(){
        return this.prisma.user.findMany();
    }

    getUserById(id : number){
        return this.prisma.user.findUnique({where : {id}});
    }

    async deleteUser(id : number){
        const findUser = await this.getUserById(id);
        if(!findUser){
            throw new HttpException('User not found', 404);
        }
        return this.prisma.user.delete({where : {id}});
    }

    async updateUserByid(id : number, data : Prisma.UserUpdateInput ){
        const user = await this.getUserById(id);
        if(!user) throw new HttpException('User not Found', 404);


        if(data.email){
            const findUser = await this.prisma.user.findUnique({
                where : { email : data.email as string },
            });
        
            if(findUser){
            throw new HttpException('User already exist', 400);
            }
        }

        return this.prisma.user.update({
            where: { id },
            data
        });
    }

}   
