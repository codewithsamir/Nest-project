import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    ManyToOne,
    JoinTable
  } from 'typeorm';
  import { Lecture } from 'src/lecture/entity/lecture.entity';
  
  @Entity('courses')
  export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 100 })
    title: string;
  
    @Column({ length: 200, nullable: true })
    subtitles?: string;
  
    @Column({ type: 'text', nullable: true })
    description?: string;
  
    @Column({ length: 50 })
    category: string;
  
    @Column({ type: 'enum', enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' })
    level: 'beginner' | 'intermediate' | 'advanced';
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
  
    @Column()
    thumbnail: string;
  
    // Store User ID (from Django API) instead of full User entity
    @Column('uuid')
    instructorId: string; // This will store the User's ID from Django for the instructor
  
    // @ManyToMany(() => User, (user) => user.enrolledCourses) // You can fetch enrolled students data from Django API later
    // @JoinTable()
    // enrolledStudents: User[];
  
    @OneToMany(() => Lecture, (lecture) => lecture.course)
    lectures: Lecture[];
  
    @Column({ default: false })
    isPublished: boolean;
  
    @Column({ type: 'int', default: 0 })
    totalDuration: number;
  
    @Column({ type: 'int', default: 0 })
    totalLectures: number;
  }
  