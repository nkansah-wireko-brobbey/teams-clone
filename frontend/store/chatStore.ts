import { Chat } from "@/models/Chat";
import { Message } from "@/models/Message";
import { stat } from "fs";
import { create } from "zustand";

type ChatState = {
  chats: Chat[];
  selectedChat: Chat | null;
  messages: Record<string, Message[]>; // keyed by chatId

  // actions
  setChats: (chats: Chat[]) => void;
  selectChat: (chatId: Chat) => void;
  setMessages: (chatId: string, messages: Message[]) => void;
  addMessage: (chatId: string, message: Message) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  selectedChat: null,
  messages: {},

  // actions
  setChats: (chats) => set({ chats }),
  selectChat: (chat) => set({ selectedChat: chat }),
  setMessages: (chatId, messages) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: messages,
      },
    })),
  addMessage: (chatId, message) =>
    set((state) =>  {
      
      const chatMessages = state.messages[chatId]
      const existingMessage = chatMessages.find((a)=> (a.id === message.id)) ?? {}
      const newMessage = {...existingMessage, ...message}
            
      return {
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] ?? []), newMessage],
      },
    }}
  
  ),
}));
