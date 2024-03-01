const https = require('https');

console.log(`start`);

https.get('https://nodejs.org/dist/index.json', (res) => {
  console.log(res.statusCode);
  console.log(`end`);
}).on('error', (error) => {
  console.error(error);
});
