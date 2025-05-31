// app.test.js
const request = require('supertest');
const app = require('./app'); // or whatever your main file is

describe('App', () => {
  test('should respond with hello world', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.text).toContain('Hello');
  });
});