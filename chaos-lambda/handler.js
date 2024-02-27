'use strict';
const fs = require('fs');

// Read the HTML file
const htmlContent = fs.readFileSync('app.html', 'utf8');
const failureLambda = require('failure-lambda');

exports.hello = failureLambda(async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: htmlContent
  };
});

