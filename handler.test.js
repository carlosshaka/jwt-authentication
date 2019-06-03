const handler = require('./handler.js');
const jwt = require('jsonwebtoken');

describe('When try verify', () => {
  let token;
  process.env.JWT_SECRET = 'shhhhh';

  describe('and the token is valid', () => {
    beforeEach(() => {
      token = jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET);
    });

    it('should return the decoded token', () => {
      return handler.verifyJWTToken(token).then(response => {
        expect(response.body).toBe('bar');
      });
    });
  });

  describe('and the token is not valid', () => {
    beforeEach(() => {
      token = jwt.sign({ foo: 'bar' }, 'wrong-secret');
    });

    it('should return error message', () => {
      return handler.verifyJWTToken(token).then(response => {
        expect(response.body).toBe('invalid signature');
      });
    });
  })
});
