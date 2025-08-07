import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '../../generated/prisma';


@Injectable()
export class PrismaServices extends PrismaClient implements OnModuleInit{
    onModuleInit() {
        this.$connect()
        .then(() => console.log('Connected To DataBase'))
        .catch((err: any) => console.log(err))
    }

}