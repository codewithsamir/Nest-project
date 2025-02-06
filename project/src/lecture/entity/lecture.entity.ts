
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from 'src/coursemanagement/entity/course.entity'; // Adjust the path based on your folder structure

@Entity('lectures')
export class Lecture {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column()
  videoUrl: string;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column()
  publicId: string;

  @Column({ default: false })
  isPreview: boolean;

  @Column()
  order: number;

  // Relation to the Course entity (Assuming each lecture belongs to a course)
  @ManyToOne(() => Course, (course) => course.lectures)
  course: Course;
}
