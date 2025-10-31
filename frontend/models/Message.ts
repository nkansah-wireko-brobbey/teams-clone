import { ChatMember } from "./ChatMember";

export type MessageRequest = {
    chatId: number;
    senderUserId: number;
    content: string;
    fileUrl?: File
}

export type Message = {
  id: number;
  chatId: number;
  sender: ChatMember;
  content: string;
  fileUrl: string | null;
  timestamp: string; // ISO 8601 timestamp, e.g. "2025-10-24T10:15:30Z"
}


