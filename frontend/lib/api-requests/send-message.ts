import apiClient from "@/lib/apiClient";
import { MessageRequest } from "@/models/Message";
import { Message } from "@/store/chatStore";

export function sendMessage(chatId: string, newMessage: MessageRequest) {
  return apiClient.post<Message>(`/chats/${chatId}/message`, { ...newMessage});
}
