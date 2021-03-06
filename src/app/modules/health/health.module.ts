import { Module } from '@nestjs/common';
import { HealthController } from './health.controller.js';

/**
 * Health check module.
 *
 * @class HealthModule
 */
@Module({
    imports: [],
    controllers: [HealthController]
})
export class HealthModule {}
