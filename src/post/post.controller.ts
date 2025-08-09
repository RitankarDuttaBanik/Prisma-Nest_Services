import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createpostDTO } from './DTO/createpostDTO';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postservice : PostService){}
    @Post()
    @UsePipes(ValidationPipe)
    createpost(
        @Body() { userId, ...createpostData}: createpostDTO
    ){
        return this.postservice.createpost(userId,createpostData);
    }
}
