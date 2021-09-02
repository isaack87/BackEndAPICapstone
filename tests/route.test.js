
const Http = require('http')

describe('api test', () => {
  const url = 'http://localhost:5000/api/related/?_id=2';
  it('user GET should be 200', async () => {
    const result = await Http({
      url,
      method: 'get',
    });
    expect(result).toBe('200');
  });
});