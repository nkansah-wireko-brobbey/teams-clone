import { ChatMember } from "./ChatMember";

export type ChatType = "DIRECT" | "GROUP" | "CHANNEL";

export type Chat = {
  id?: number;
  name?: string;
  type: ChatType;
  members: ChatMember[];
};

export type DirectChatRequest = {
  type: ChatType;
  memberUserIds: string[];
};
