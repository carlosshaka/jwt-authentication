'use strict';
const jwt = require('jsonwebtoken');

module.exports.verify = async (event) => {
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

  try {
    var decoded = jwt.verify(token, 'shhhhh');
    const response = {
      statusCode: 200,
      body: decoded.foo
    };
    return response;
  } catch (err) {
    const response = {
      statusCode: 403,
      body: err.message
    };
    return response;
  }
};
