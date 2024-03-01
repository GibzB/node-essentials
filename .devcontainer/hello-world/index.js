const https = require('https');

console.log(`start`);

try {
    async function newfun(res, req) {
    
        const response = await https.get('https://nodejs.org/dist/index.json');

        console.log(res.statusCode);
    }
}
catch(error) {
    console.log(error);
}

console.log(`end`);