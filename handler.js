'use strict';
const jwt = require('jsonwebtoken');

module.exports.verify = async token => {
  const { secret } = process.env
  try {
    var decoded = jwt.verify(token, secret);
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
