import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HealthCheckResult } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  @MessagePattern({ role: 'user', cmd: 'health' })
  public async check(): Promise<HealthCheckResult> {
    return await this.healthService.check();
  }
}
