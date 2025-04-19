import React, { useState } from "react";

const MessagePage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Company",
      text: "Hello! How can we help you?",
      timestamp: "10:00 AM",
      unread: false,
    },
    {
      id: 2,
      sender: "User",
      text: "I wanted to know about the job opening.",
      timestamp: "10:05 AM",
      unread: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "User",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString(),
          unread: false,
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-white rounded shadow">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-lg shadow 
                            ${
                              msg.sender === "User"
                                ? "ml-auto bg-blue-500 text-white"
                                : "mr-auto bg-gray-200 text-gray-800"
                            }`}
          >
            <div>{msg.text}</div>
            <div className="text-xs text-right mt-1 opacity-70">
              {msg.timestamp}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagePage;
