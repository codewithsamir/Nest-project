import { Module } from '@nestjs/common';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';
import { Lecture } from './entity/lecture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Lecture])], // Ensure this line is present
    controllers:[LectureController],
    providers:[LectureService]
})
export class LectureModule {}
