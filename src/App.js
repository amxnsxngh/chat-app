import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socketRef = useRef(null); // Store WebSocket instance

  useEffect(() => {
    if (!socketRef.current || socketRef.current.readyState === WebSocket.CLOSED) {
      socketRef.current = new WebSocket('ws://localhost:3001');

      socketRef.current.onopen = () => {
        console.log('WebSocket connected.');
      };

      socketRef.current.onmessage = (event) => {
        const receivedMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      };

      socketRef.current.onclose = () => {
        console.log('WebSocket connection closed.');
      };
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []); // Empty dependency array ensures WebSocket is initialized only once

  const sendMessage = () => {
    if (messageInput.trim() !== '' && socketRef.current?.readyState === WebSocket.OPEN) {
      const message = {
        text: messageInput,
        timestamp: new Date().toISOString(),
      };
      socketRef.current.send(JSON.stringify(message));
      setMessageInput('');
    } else {
      console.error('WebSocket is not open. Unable to send message.');
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message.text} - <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;