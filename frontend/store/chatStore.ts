import { create } from "zustand";

export type Message = {
  id: string;
  chatId: string;
  sender: "me" | "other";
  text?: string;
  timestamp: string;
  attachment?: {
    type: "image" | "file";
    url: string;
    name?: string;
  };
};

type Chat = {
  id: string;
  name: string;
  lastMessage?: string;
};

type ChatState = {
  currentUser: { id: string; name: string } | null;
  chats: Chat[];
  selectedChat: string | null;
  messages: Record<string, Message[]>; // keyed by chatId

  // actions
  setCurrentUser: (user: { id: string; name: string }) => void;
  setChats: (chats: Chat[]) => void;
  selectChat: (chatId: string) => void;
  sendMessage: (chatId: string, msg: Omit<Message, "id" | "timestamp">) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  currentUser: { id: "1", name: "Nkansah" },
  chats: [
    { id: "chat1", name: "Alice" },
    { id: "chat2", name: "Group Chat" },
  ],
  selectedChat: "chat1",
  messages: {
    chat1: [
      {
        id: "m1",
        chatId: "chat1",
        sender: "other",
        text: "Hey! How are you?",
        timestamp: new Date().toISOString(),
      },
    ],
  },

  // actions
  setCurrentUser: (user) => set({ currentUser: user }),
  setChats: (chats) => set({ chats }),
  selectChat: (chatId) => set({ selectedChat: chatId }),
  sendMessage: (chatId, msg) =>
    set((state) => {
      const newMessage: Message = {
        ...msg,
        id: Math.random().toString(36).substr(2, 9),
        chatId,
        timestamp: new Date().toISOString(),
      };
      return {
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), newMessage],
        },
      };
    }),
}));
