import request from 'supertest';
import { Response } from 'express';
import app from './../src/app';

describe('Testando Rotas do serviço Accounts', () => {
  it('POST /accounts/ - Deve retornar statusCode 201', async () => {
    const payload = {
      id: 1,
      name: 'Bruno',
      email: 'brunoemf@gmail.com',
      password: '123456',
      status: 1
    }

    const resultado = await request(app)
      .post('/accounts/') // para onde vai mandar a requisição 
      .send(payload) // o dado que esta sendo enviado

    expect(resultado.status).toEqual(201)

  })
})