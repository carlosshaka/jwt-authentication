'use strict';
const jwt = require('jsonwebtoken');

module.exports.verifyJWTToken = async token => {
  const { JWT_SECRET } = process.env
  try {
    var decoded = jwt.verify(token, JWT_SECRET);
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
