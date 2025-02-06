import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoursemanagementModule } from './coursemanagement/coursemanagement.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available throughout the app
    }),

    // Configure TypeORM with environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>{ 
        const dbHost = configService.get<string>('BD_HOST');
        const dbPort = configService.get<number>('BD_PORT');
        console.log(`Database Host: ${dbHost}`);
        console.log(`Database Port: ${dbPort}`);
        return {
        
        type: 'postgres',
        host: configService.get<string>('BD_HOST'),
        port: configService.get<number>('BD_PORT'),
        username: configService.get<string>('BD_USERNAME'),
        password: configService.get<string>('BD_PASSWORD'),
        database: configService.get<string>('BD_NAME'),
         entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],  // Explicitly mention your entities here
        autoLoadEntities: true,
        synchronize: configService.get<string>('NODE_ENV') === 'development', // Only true in development
      }}
    }),

    // Import your feature modules
    CoursemanagementModule,
    LectureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
