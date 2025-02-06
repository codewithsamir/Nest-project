

import {
    IsString,
    IsNotEmpty,
    MaxLength,
    IsOptional,
    IsNumber,
    Min,
    IsEnum,
    IsBoolean,
    IsArray,
    IsUUID,
  } from 'class-validator';
  
  export class CreateCourseDto {
    @IsString()
    @IsNotEmpty({ message: 'Course title is required' })
    @MaxLength(100, { message: 'Course title cannot exceed 100 characters' })
    title: string;
  
    @IsString()
    @IsOptional()
    @MaxLength(200, { message: 'Course subtitle cannot exceed 200 characters' })
    subtitles?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Course category is required' })
    category: string;
  
    @IsEnum(['beginner', 'intermediate', 'advanced'], {
      message: 'Please select a valid course level',
    })
    level: 'beginner' | 'intermediate' | 'advanced';
  
    @IsNumber()
    @IsNotEmpty({ message: 'Course price is required' })
    @Min(0, { message: 'Course price must be a non-negative number' })
    price: number;
  
    @IsString()
    @IsNotEmpty({ message: 'Course thumbnail is required' })
    thumbnail: string;
  
    @IsArray()
    @IsUUID('4', { each: true })
    @IsOptional()
    enrolledStudents?: string[];
  
    @IsArray()
    @IsUUID('4', { each: true })
    @IsOptional()
    lectures?: string[];
  
    @IsUUID('4')
    @IsNotEmpty({ message: 'Course instructor is required' })
    instructor: string;
  
    @IsBoolean()
    @IsOptional()
    isPublished?: boolean;
  
    @IsNumber()
    @IsOptional()
    totalDuration?: number;
  
    @IsNumber()
    @IsOptional()
    totalLectures?: number;
  }
  