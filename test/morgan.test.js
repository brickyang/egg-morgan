'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/morgan.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/morgan-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, morgan')
      .expect(200);
  });
});
