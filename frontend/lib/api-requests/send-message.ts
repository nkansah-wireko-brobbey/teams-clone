import apiClient from "@/lib/apiClient";
import { MessageRequest } from "@/models/Message";
import { Message } from "@/store/chatStore";

export function sendMessage(newMessage: MessageRequest) {
  return apiClient.post<Message>(`/chats/${newMessage.chatId}/message`, { ...newMessage});
}
