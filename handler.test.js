const handler = require('./handler.js');


test('When try verify and the token is valid, should return the decoded token', () => {
  return handler.verify().then(response => {
    expect(response.body).toBe('bar');
  });
});