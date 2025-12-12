"use client"
import { useAuth } from '@/app/(auth)/components/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sendMessage } from '@/lib/api-requests/send-message'
import { MessageRequest } from '@/models/Message'
import { SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'

const ChatInput = ({ chatId }: { chatId: string }) => {

    const [input, setInput] = useState<string>("")

    const { userProfile } = useAuth()
    const handleSendMessage = async (): Promise<void> => {
        if (!input.trim()) return

        const newMessageRequest: MessageRequest = {
            chatId,
            content: input,
        }

        try {
            await sendMessage(chatId, newMessageRequest)
            setInput("")
        } catch (error: unknown) {
            console.error("Error sending message:", error)
        }
    }

    const keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSendMessage()
        }
    }
    return (
        <div className=" p-4 border-t flex gap-2">
            <Input
                onKeyDown={keydownHandler}
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Type a message..."
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <Button
                className="hover:cursor-pointer"
                onClick={handleSendMessage}
                disabled={!input.trim()}
            ><SendHorizontal /></Button>
        </div>
    )
}

export default ChatInput