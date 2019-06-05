const handler = require('./handler.js');
const jwt = require('jsonwebtoken');

describe('When try verify', () => {
  let token;
  process.env.secret = '4D1FDB465B46DD22C14B9EFE89E9D';

  describe('and the token is valid', () => {
    beforeEach(() => {
      token = jwt.sign({ foo: 'bar' }, process.env.secret);
      console.log(token);
    });

    it('should return the decoded token', () => {
      return handler.verify(token).then(response => {
        expect(response.body).toBe('bar');
      });
    });
  });

  describe('and the token is not valid', () => {
    beforeEach(() => {
      token = jwt.sign({ foo: 'bar' }, 'wrong-secret');
    });

    it('should return error message', () => {
      return handler.verify(token).then(response => {
        expect(response.body).toBe('invalid signature');
      });
    });
  })
});
