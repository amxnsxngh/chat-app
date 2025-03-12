WebSocket Chat Application

A simple real-time chat application built using Node.js, WebSockets, and React.

Features

Real-time messaging using WebSockets

Broadcast messages to all connected clients

Displays timestamps for each message

Handles client connections and disconnections

Prerequisites

Ensure you have the following installed:

Node.js

npm or yarn

Installation

Clone the repository

git clone https://github.com/your-username/websocket-chat-app.git
cd websocket-chat-app

Install dependencies

Backend (WebSocket Server)

cd server
npm install

Frontend (React App)

cd client
npm install

Usage

Start the WebSocket Server

cd server
node server.js

By default, the server runs on port 3001.

Start the React Client

cd client
npm start

By default, the React app runs on port 3000. If port 3000 is occupied, you may be prompted to use another port.

Project Structure

websocket-chat-app/
│── server/                # WebSocket Server (Node.js)
│   ├── server.js          # WebSocket server implementation
│   ├── package.json       # Backend dependencies
│
│── client/                # Frontend (React.js)
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│
└── README.md              # Project documentation

Troubleshooting

"Something is already running on port 3000."

If you see this message, either:

Press 'Y' to run React on another port.

Kill the process using the port:

lsof -i :3000  # Find process ID (PID) on macOS/Linux
kill -9 <PID>  # Kill process

netstat -ano | findstr :3000  # Find PID on Windows
taskkill /PID <PID> /F        # Kill process

"WebSocket connection failed."

Ensure the WebSocket server is running on port 3001.

Check if the React client is connecting to the correct WebSocket URL (ws://localhost:3001).