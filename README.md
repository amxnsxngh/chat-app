📡 WebSocket Chat Application

This is a real-time chat application built using React for the frontend and WebSocket (Node.js & WebSocket library) for the backend. It enables multiple users to connect, send messages, and receive messages instantly. The server broadcasts messages to all connected clients except the sender.

🚀 Features

Real-time bidirectional messaging

Broadcast messages to all connected clients

WebSocket server using websocket module

React-based frontend for user interaction

📁 Project Structure

📦 websocket-chat-app
├── 📂 backend
│   ├── server.js (WebSocket server)
├── 📂 frontend
│   ├── src
│   │   ├── App.js (React frontend)
│   │   ├── App.css (Styles)
│   ├── public
│   ├── package.json
├── README.md

🛠️ Installation & Setup

1️⃣ Clone the repository

 git clone https://github.com/your-username/websocket-chat-app.git

2️⃣ Install dependencies

Backend

 cd backend
 npm install

Frontend

 cd frontend
 npm install

3️⃣ Start the application

Run the WebSocket server

 node server.js

Start the React frontend

 npm start

The frontend will run on http://localhost:3000 and connect to the WebSocket server at ws://localhost:3001.

⚠️ Troubleshooting

Port Already in Use: If you see Something is already running on port 3000, press Y to use another port or stop the running process using:

npx kill-port 3000

WebSocket Not Connecting: Ensure the backend is running and accessible at ws://localhost:3001.
