import React, { useState, useEffect, useRef } from "react";

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
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "User",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          unread: false,
        },
      ]);
      setNewMessage("");
    }
  };

  const getAvatar = (sender) =>
    sender === "User"
      ? "https://i.pravatar.cc/40?img=1"
      : "https://i.pravatar.cc/40?img=12";

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-100 to-slate-300 px-2">
      <div className="w-full max-w-3xl h-full flex flex-col rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="px-4 py-3 bg-blue-600 text-white font-semibold text-lg">
          💬 Chat with Us
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scroll">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end space-x-2 ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender !== "User" && (
                <img
                  src={getAvatar(msg.sender)}
                  alt="avatar"
                  className="w-8 h-8 rounded-full shadow-md"
                />
              )}
              <div
                className={`max-w-sm px-4 py-2 rounded-2xl shadow-md text-sm break-words ${
                  msg.sender === "User"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
                <div className="text-[10px] text-right mt-1 opacity-60">
                  {msg.timestamp}
                </div>
              </div>
              {msg.sender === "User" && (
                <img
                  src={getAvatar(msg.sender)}
                  alt="avatar"
                  className="w-8 h-8 rounded-full shadow-md"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t bg-white flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
