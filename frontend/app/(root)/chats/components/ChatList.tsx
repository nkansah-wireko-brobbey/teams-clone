"use client"

import React, { useState, useTransition } from 'react'
import ChatCard from './ChatCard'
import { Chat } from '@/models/Chat'
import { LoaderCircle } from 'lucide-react'
import { getChats } from '@/lib/api-requests/get-chats'
import { useChatStore } from '@/store/chatStore'

const ChatList = () => {

  const setChats = useChatStore((store) => store.setChats)
  const chats = useChatStore((store) => store.chats)
  const setActiveChat = useChatStore((store)=>store.selectChat)
  const [isPending, startTransition] = useTransition()
  const fetchChats = async () => {
    try {

      const response = await getChats()
      startTransition(() => {
        setChats(response.data)
      })

      console.log("Response", response.data)

    } catch (error) {

    }
  }

  const handleSelect = (chat: Chat) =>{
      setActiveChat(chat)
  }

  React.useEffect(() => {
    fetchChats()
  }, [])

  return (
    <div className="space-y-2">
      {
        isPending && (<><LoaderCircle className='animate-spin' /></>)
      }
      {
        !!chats.length && !isPending ? (
          chats.map((chat) => (<ChatCard key={chat.id} chat={chat} onSelect={()=>{handleSelect(chat)}}/>))
        ) : (<>No chats found! 😒</>)
      }

    </div>
  )
}

export default ChatList