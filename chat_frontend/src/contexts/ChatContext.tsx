import React, { createContext, useContext, useEffect, useState } from 'react';
import socket from '../services/socketService';

interface ChatData {
    profileImage: string;
    notifications: number;
    lastMessage: string;
  }

interface ChatContextProps {
    messages: ChatData[];
    sendMessage: (message: string) => void;
}

interface ChatProviderProps {
    children: React.ReactNode;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<ChatData[]>([]);

    useEffect(() => {
        socket.on('message', (message: string) => {
            const newMessage: ChatData = {
                profileImage: '/default-profile-image.png',
                notifications: 0,
                lastMessage: message,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (message: string) => {
        socket.emit('message', message);
    };

    return (
        <ChatContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};

export { ChatProvider, useChat };
