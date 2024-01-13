import React, { useState } from 'react';
import { useChat } from '../contexts/ChatContext';
import ChatComponent from '../components/ChatComponent';

interface ChatData {
    profileImage: string;
    notifications: number;
    lastMessage: string;
  }

const ChatOverviewPage: React.FC = () => {
  const { messages } = useChat();
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);

  const handleSelectChat = (chat: ChatData) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex">
      {/* Chat List */}
      <div className="w-1/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Chat Overview</h1>
        {messages.map((chat, index) => (
          <ChatComponent key={index} {...chat} onSelectChat={() => handleSelectChat(chat)} />
        ))}
      </div>

      {/* Chat Content */}
      <div className="flex-grow p-4">
        {selectedChat ? (
          <div>
            <h2 className="text-2xl font-bold">{selectedChat.lastMessage}</h2>
            {/* Additional chat content */}
          </div>
        ) : (
          <p>Select a chat to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default ChatOverviewPage;
