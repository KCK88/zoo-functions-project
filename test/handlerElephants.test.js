const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Verifica se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
