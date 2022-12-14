import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MetricsService } from './metrics.service';

@Controller()
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @MessagePattern({ role: 'user', cmd: 'metrics' })
  public metrics(): Promise<string> {
    return this.metricsService.metrics;
  }
}
