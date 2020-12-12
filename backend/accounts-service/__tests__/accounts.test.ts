import request from 'supertest';
import app from './../src/app';

describe('Testando Rotas do serviço Accounts', () => {
  // Testa o Get sem passagem de parâmetros
  it('GET /accounts/ - Deve retornar statuscode 200', async () => {
    const resultado = await request(app)
      .get('/accounts/');

    expect(resultado.status).toEqual(200);
    expect(Array.isArray(resultado.body)).toBeTruthy();
  })

  // Testa a post de accounts
  it('POST /accounts/ - Deve retornar statusCode 201', async () => {
    const payload = {
      id: 1,
      name: 'Bruno',
      email: 'brunoemf@gmail.com',
      password: '123456',
      status: 100
    }

    const resultado = await request(app)
      .post('/accounts/') // para onde vai mandar a requisição 
      .send(payload) // o dado que esta sendo enviado

    expect(resultado.status).toEqual(201);
    expect(resultado.body.id).toBe(1);
  })

  it('POST /accounts/ - Deve retornar statusCode 201', async () => {
    const payload = {
      id: 1,
      street: 'rua dos carajas',
      city: 'Uberaba',
      state: 'MG'
    }

    const resultado = await request(app)
      .post('/accounts/') // para onde vai mandar a requisição 
      .send(payload) // o dado que esta sendo enviado

    expect(resultado.status).toEqual(422);
  })

  // Testa o Get passando parâmetros
  it('GET /accounts/:id - Deve retornar statuscode 200', async () => {
    const resultado = await request(app)
      .get('/accounts/1');
    // deve retornar o status 200
    expect(resultado.status).toEqual(200);
    // Deve retornar no body o id = 1 que é o que foi inserido no post anterior do teste
    expect(resultado.body.id).toBe(1);
  })

  it('GET /accounts/:id - Deve retornar statuscode 404', async () => {
    const resultado = await request(app)
      .get('/accounts/2');
    // Retornar erro 404
    expect(resultado.status).toEqual(404);
  })

  it('GET /accounts/:id - Deve retornar statuscode 400', async () => {
    const resultado = await request(app)
      .get('/accounts/abc');
    // Retornar erro 400
    expect(resultado.status).toEqual(400);
  })

})