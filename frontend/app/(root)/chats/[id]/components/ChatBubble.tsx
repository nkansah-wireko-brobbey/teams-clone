import React from "react";

interface ChatBubbleProps {
  message?: string;
  sender?: "me" | "other";
  timestamp?: string;
  attachment?: {
    type: "image" | "file";
    url: string;
    name?: string; // for file display
  };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender = "other",
  timestamp,
  attachment,
}) => {
  const isMe = sender === "me";

  return (
    <div className={`flex mb-2 ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-sm ${
          isMe
            ? "bg-primary text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {/* Text message */}
        {message && <p className="text-sm mb-1">{message}</p>}

        {/* Attachment (image or file) */}
        {attachment?.type === "image" && (
          <img
            src={attachment.url}
            alt="attachment"
            className="rounded-lg mt-1 max-h-48 object-cover"
          />
        )}

        {attachment?.type === "file" && (
          <a
            href={attachment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-1 text-sm underline"
          >
            📎 {attachment.name || "Download file"}
          </a>
        )}

        {/* Timestamp */}
        {timestamp && (
          <span className="block text-[10px] text-gray-400 mt-1">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
