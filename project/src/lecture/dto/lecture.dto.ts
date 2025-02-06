
import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class CreateLectureDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsString()
  @IsNotEmpty()
  videoUrl: string;

  @IsNumber()
  @IsOptional()
  duration: number = 0;

  @IsString()
  @IsNotEmpty()
  publicId: string;

  @IsBoolean()
  @IsOptional()
  isPreview: boolean = false;

  @IsNumber()
  @IsNotEmpty()
  order: number;
}
