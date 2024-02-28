const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const failureLambda = require('failure-lambda');

exports.hello = failureLambda(async (event, context) => {

  // Business Logic Here wrapped inside failureLambda
  try {
    const params = {
      Bucket: 'ui-bucket-demo-chaos',
      Key: 'app.html'
    };

    const data = await s3.getObject(params).promise();
    const htmlContent = data.Body.toString('utf-8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: htmlContent
    };
  } catch (error) {
    console.error('Error fetching HTML file from S3:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
});

