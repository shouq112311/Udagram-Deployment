const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { AuthRouter } = require(
  '../www/controllers/v0/users/routes/auth.router'
);

chai.use(chaiHttp);

const expect = chai.expect;

const app = express();

app.use(express.json());
app.use('/auth', AuthRouter);

describe('Backend Authentication Tests', function () {

  it('should reject login without email', async function () {
    const res = await chai.request(app)
      .post('/auth/login')
      .send({ password: 'Test1234' });

    expect(res).to.have.status(400);
    expect(res.body.auth).to.equal(false);
  });

  it('should reject login with invalid email', async function () {
    const res = await chai.request(app)
      .post('/auth/login')
      .send({
        email: 'invalid-email',
        password: 'Test1234'
      });

    expect(res).to.have.status(400);
    expect(res.body.auth).to.equal(false);
  });

  it('should reject login without password', async function () {
    const res = await chai.request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com' });

    expect(res).to.have.status(400);
    expect(res.body.auth).to.equal(false);
  });

  it('should reject registration with invalid email', async function () {
    const res = await chai.request(app)
      .post('/auth')
      .send({
        email: 'invalid-email',
        password: 'Test1234'
      });

    expect(res).to.have.status(400);
    expect(res.body.auth).to.equal(false);
  });

  it('should reject registration without password', async function () {
    const res = await chai.request(app)
      .post('/auth')
      .send({ email: 'test@example.com' });

    expect(res).to.have.status(400);
    expect(res.body.auth).to.equal(false);
  });

  it('should reject verification without token', async function () {
    const res = await chai.request(app)
      .get('/auth/verification');

    expect(res).to.have.status(401);
    expect(res.body.message).to.equal(
      'No authorization headers.'
    );
  });

});