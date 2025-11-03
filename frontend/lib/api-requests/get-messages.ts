import apiClient from "@/lib/apiClient";
import { Message } from "@/models/Message";

export function getMessages(chatId: string) {
  return apiClient.get<Message[]>(`/chats/${chatId}/messages`);
}
