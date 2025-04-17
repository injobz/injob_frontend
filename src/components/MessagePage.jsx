import React, { useState } from "react";
import "./MessagePage.css";

const MessagePage = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: "Company", text: "Hello! How can we help you?", timestamp: "10:00 AM", unread: false },
        { id: 2, sender: "User", text: "I wanted to know about the job opening.", timestamp: "10:05 AM", unread: false },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                { id: messages.length + 1, sender: "User", text: newMessage, timestamp: new Date().toLocaleTimeString(), unread: false },
            ]);
            setNewMessage("");
        }
    };

    return (
        <div className="message-page">
            <div className="message-thread">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender === "User" ? "user-message" : "company-message"}`}>
                        <div className="message-text">{msg.text}</div>
                        <div className="message-timestamp">{msg.timestamp}</div>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default MessagePage;