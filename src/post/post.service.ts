import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaServices } from 'src/Prisma/prisma.service';

@Injectable()
export class PostService {
    constructor(private prisma : PrismaServices){}

    createpost(userId : number , data : Prisma.PostCreateWithoutUserInput){
        return this.prisma.post.create({data : {...data,userId}});
    }

    }

