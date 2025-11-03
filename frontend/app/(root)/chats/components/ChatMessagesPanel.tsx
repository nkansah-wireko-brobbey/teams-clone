"use client"
import { useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";
import { getMessages } from "@/lib/api-requests/get-messages";
import { Message } from "@/models/Message";
import { useAuth } from "@/app/(auth)/components/AuthContext";


export const ChatMessagesPanel = ({ chatId }: { chatId: string }) => {

    const { userProfile } = useAuth()

    const email = userProfile?.email

    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getMessages(chatId);
                setMessages(response.data);
            } catch (err) {
                console.error("Error fetching messages:", err);
                setError("Failed to load messages. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [chatId]);

    if (loading) {
        return (
            <div className="p-4 text-gray-500 italic text-center">
                loading...
            </div>
        )
    }

    if (!messages || messages.length === 0) {
        return (
            <div className="p-4 text-gray-500 italic text-center">
                No messages yet. Start the conversation!
            </div>
        )
    }
    if (error) {
        return (
            <div className="p-4 text-red-500 italic text-center">
                {error}
            </div>
        )
    }


    return (
        <div className="p-4 space-y-2">
            {
                messages.map((message) => {
                    return (

                        <ChatBubble
                            key={message.id}
                            message={message.content}
                            sender={email === message.sender.user.email ? "me" : "other"}
                            timestamp={message.timestamp}
                        />

                    )
                })
            }

        </div>
    );
};
