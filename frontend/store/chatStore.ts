import { create } from "zustand"

export type Message = {
  id: string
  chatId: string
  sender: "me" | "other"
  text?: string
  timestamp: string
  attachment?: {
    type: "image" | "file"
    url: string
    name?: string
  }
}

type Chat = {
  id: string
  name: string
  lastMessage?: string
}

type ChatState = {
  chats: Chat[]
  selectedChat: string | null
  messages: Record<string, Message[]> // keyed by chatId

  // actions
  setChats: (chats: Chat[]) => void
  selectChat: (chatId: string) => void
  sendMessage: (chatId: string, msg: Omit<Message, "id" | "timestamp">) => void
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  selectedChat: null,
  messages: {},

  // actions
  setChats: (chats) => set({ chats }),
  selectChat: (chatId) => set({ selectedChat: chatId }),
  sendMessage: (chatId, msg) =>
    set((state) => {
      const newMessage: Message = {
        ...msg,
        id: Math.random().toString(36).slice(2, 11),
        chatId,
        timestamp: new Date().toISOString(),
      }
      return {
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), newMessage],
        },
      }
    }),
}))
