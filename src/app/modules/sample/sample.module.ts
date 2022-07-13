import { Module } from '@nestjs/common';
import { SampleController } from './controllers/sample.controller.js';
import { SampleService } from './services/sample.service.js';

/**
 * Sample module.
 *
 * @class SampleModule
 */
@Module({
    controllers: [SampleController],
    providers: [SampleService]
})
export class SampleModule {}
