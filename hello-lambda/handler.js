'use strict';
const failureLambda = require('failure-lambda');

exports.hello = failureLambda(async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
});
