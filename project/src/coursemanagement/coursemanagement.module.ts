import { Module } from '@nestjs/common';
import { CoursemanagementController } from './coursemanagement.controller';
import { CoursemanagementService } from './coursemanagement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Course} from './entity/course.entity'
@Module({
    imports: [TypeOrmModule.forFeature([Course])], // Ensure this line is present
    controllers:[CoursemanagementController],
    providers:[CoursemanagementService]
})
export class CoursemanagementModule {}
