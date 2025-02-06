import { Test, TestingModule } from '@nestjs/testing';
import { CoursemanagementController } from './coursemanagement.controller';

describe('CoursemanagementController', () => {
  let controller: CoursemanagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursemanagementController],
    }).compile();

    controller = module.get<CoursemanagementController>(CoursemanagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
