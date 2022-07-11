import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { SampleModule } from '../app/modules/index.js';
import * as request from 'supertest';

describe('Sample', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [SampleModule]
        }).compile();

        app = moduleRef.createNestApplication();
        app.enableShutdownHooks();
        await app.init();
    });

    test('GET basic should return Hello World', () => {
        const expected = 'Hello World';

        return request
            .default(app.getHttpServer())
            .get('/basic')
            .expect(200)
            .expect(expected);
    });

    afterAll(async () => {
        await app.close();
    });
});
