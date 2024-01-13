import React from 'react';


interface ChatData {
    profileImage: string;
    notifications: number;
    lastMessage: string;
  }
  

interface ChatComponentProps extends ChatData {
  onSelectChat: () => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ profileImage, notifications, lastMessage, onSelectChat }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b cursor-pointer" onClick={onSelectChat}>
      <div className="flex items-center">
        <img src={profileImage} alt="User Profile" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-bold">{lastMessage}</p>
          <p className="text-gray-500">Notifications: {notifications}</p>
        </div>
      </div>
      <span className="notifications bg-red-500 text-white px-4 py-2 rounded-full">{notifications}</span>
    </div>
  );
};

export default ChatComponent;
