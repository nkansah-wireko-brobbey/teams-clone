import apiClient from "@/lib/apiClient";
import { Chat, DirectChatRequest } from "@/models/Chat";

export function createChats(chat: DirectChatRequest) {
  return apiClient.post<Chat>("/chats", { ...chat});
}
