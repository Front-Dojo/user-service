import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { PrometheusModule } from 'src/prometheus/prometheus.module';
import { HealthModule } from 'src/health/health.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  providers: [MetricsService, HttpModule],
  controllers: [MetricsController],
  imports: [PrometheusModule, HealthModule],
})
export class MetricsModule {}
