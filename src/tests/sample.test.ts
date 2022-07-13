import { afterAll, beforeAll, describe, test } from 'vitest';
import request, { SuperTest, Test as AppTest } from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { SampleModule } from '../app/modules/index.js';

describe('Sample', () => {
    let app: INestApplication;
    let server: SuperTest<AppTest>;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [SampleModule]
        }).compile();

        app = moduleRef.createNestApplication();

        await app.init();

        server = request(app.getHttpServer());
    });

    test('GET basic should return Hello World', () => {
        const expected = 'Hello World';

        return server.get('/basic').expect(200).expect(expected);
    });

    afterAll(async () => {
        await app.close();
    });
});
