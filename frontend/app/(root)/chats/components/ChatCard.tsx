"use client"

import { useAuth } from '@/app/(auth)/components/AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/lib/getInitials'
import { Chat } from '@/models/Chat'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



const ChatCard = ({ chat, onSelect }: { chat: Chat, onSelect: ()=>void }) => {

  const { userProfile } = useAuth()

  const router = useRouter()

  const otherMember = chat.members.find((member) => member.user.email != userProfile?.email) ??  chat.members.at(0)

  const displayName = chat.name ?? otherMember?.user.email

  const avatarFallback = getInitials(otherMember?.user.name ?? "")

  const pictureUrl = otherMember?.user.pictureUrl ?? "https://github.com/shadcn.png"

  const handleClick = () => {
    onSelect()
    router.push("/chats/" + chat.id)
  }

  return (
    <div className='border flex gap-2 p-4 rounded-lg items-center hover:cursor-pointer' onClick={handleClick}>
      <div>
        <Avatar className='size-12'>
          <AvatarImage src={pictureUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between'>
          <span className='font-bold'>{displayName ?? "email"}</span>
          <span className='font-medium text-primary'>3:41PM</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium text-gray-500'>Hey! U're using chats!😏</span>
          <span className='bg-primary rounded-full text-sm w-[20px] h-[20px] text-white font-bold text-center'>12</span>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ChatCard