import React, { createContext, useContext, useEffect, useState } from 'react';
import socket from '../services/socketService';

interface ChatContextProps {
    messages: string[];
    sendMessage: (message: string) => void;
}

interface ChatProviderProps {
    children: React.ReactNode;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.on('message', (message: string) => {
            setMessages((prevMessages) => [...prevMessages, message]);
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
