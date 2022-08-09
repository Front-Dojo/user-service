import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'user', cmd: 'create' })
  createUser(itemDto) {
    return this.appService.createUser(itemDto);
  }

  @MessagePattern({ role: 'user', cmd: 'get-by-id' })
  getUserById(id: number) {
    return this.appService.getUserById(id);
  }
}
