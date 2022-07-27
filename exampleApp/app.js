// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'apm-test',

  // Use if APM Server requires a secret token
  secretToken: '',

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',

  // Set the service environment
  environment: 'production',
});

const express = require('express');

const app = new express();

app.get('/', (_req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server listen on port 3000');
});
