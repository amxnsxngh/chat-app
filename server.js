const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running.');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected.');

  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    console.log('Received:', parsedMessage);

    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

server.listen(3001, () => {
  console.log('WebSocket server is listening on port 3001');
});
