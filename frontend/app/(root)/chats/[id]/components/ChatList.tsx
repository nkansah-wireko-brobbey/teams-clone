"use client"

import React, { useState, useTransition } from 'react'
import ChatCard from './ChatCard'
import { Chat } from '@/models/Chat'
import { LoaderCircle } from 'lucide-react'
import { getChats } from '@/lib/api-requests/get-chats'

const ChatList = () => {

  const [chats, setChats] = useState<Chat[]>([])

  const [isPending, startTransition] = useTransition()

  const fetchChats = async () => {
    try {

      const response = await getChats()

      startTransition(() => {
        setChats(response.data)
      })

    } catch (error) {

    }
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
          chats.map((chat) => (<ChatCard key={chat.id} />))
        ) : (<>No chats found! 😒</>)
      }

    </div>
  )
}

export default ChatList