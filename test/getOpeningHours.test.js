const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se retorna um objeto com todos os horários se a função estiver sem argumentos.', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se retorna "The zoo is closed" "monday" "09:00-AM"', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Testa se retorna "The zoo is closed" "tuesday" "09:00-AM"', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se retorna "The zoo is closed" "wednesday" "09:00-PM"', () => {
    expect(getOpeningHours('wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se lança uma exceção "The hour should represent a number"', () => {
    expect(() => getOpeningHours('saturday', 'HH:MM-AM')).toThrowError('The hour should represent a number');
  });
  it('Testa se lança uma exceção "The abbreviation must be AM or PM"', () => {
    expect(() => getOpeningHours('sunday', '09:00-AA')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se lança uma exceção "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('tuesday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
  });
  it('Testa se lança uma exceção "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('wednesday', '12:60-PM')).toThrowError('The minutes must be between 0 and 59');
  });
});
