import { Controller, Get, Post } from '@nestjs/common';

@Controller('coursemanagement')
export class CoursemanagementController {

    @Get()
    getdata(){
        return {status:200, message:"hello user"}
    }

    @Post()
    postdata(){
        return {data:'give me data'}
    }
}
