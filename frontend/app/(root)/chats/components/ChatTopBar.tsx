"use client"
import { useAuth } from '@/app/(auth)/components/AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/lib/getInitials'
import { Chat } from '@/models/Chat'
import { useChatStore } from '@/store/chatStore'
import React from 'react'

const ChatTopBar = () => {

    const chat = useChatStore((store) => store.selectedChat)
    const { userProfile } = useAuth()
    const otherMember = chat?.members.find((member) => member.user.email != userProfile?.email) ?? chat?.members.at(0)
    const displayName = chat?.name ?? otherMember?.user.email
    const avatarFallback = getInitials(otherMember?.user.name ?? "")
    const pictureUrl = otherMember?.user.pictureUrl ?? "https://github.com/shadcn.png"

    return (
        <>
            <div>
                <Avatar className="size-12">
                    <AvatarImage src={pictureUrl} />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <span className="font-bold block text-xl">{displayName}</span>
                <span className="font-medium text-gray-500 block italic">
                    Last Seen 3 hours ago!
                </span>
            </div>
        </>
    )
}

export default ChatTopBar