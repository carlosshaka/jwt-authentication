'use strict';
const jwt = require('jsonwebtoken');

module.exports.verify = async (event) => {
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

  try {
    var decoded = jwt.verify(token, 'shhhh');
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: decoded.foo
      }, null, 2),
    };
    return response;
  } catch (err) {
    const response = {
      statusCode: 403,
      body: JSON.stringify({
        message: err.message
      }, null, 2),
    };
    return response;
  }
};
