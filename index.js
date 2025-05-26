const http = require('http');

const port = process.env.PORT || 3000;  // Use Azure's port or fallback to 3000 locally

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from CI/CD!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


