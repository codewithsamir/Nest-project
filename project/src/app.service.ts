import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const dbHost = this.configService.get<string>('BD_HOST');
    const dbPort = this.configService.get<number>('BD_PORT');
    console.log(`Database Host: ${dbHost}`);
    console.log(`Database Port: ${dbPort}`);

    return 'Hello World!';
  }
}
