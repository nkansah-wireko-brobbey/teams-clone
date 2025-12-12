"use client"

import React, { Usable } from 'react'
import {use} from 'react'
import { ChatMessagesPanel } from '../components/ChatMessagesPanel'
import ChatList from '../components/ChatList'
import ChatFilters from '../components/ChatFilters'
import AddChatMember from '../components/AddChatMember'
import ChatTopBar from '../components/ChatTopBar'
import ChatInput from '../components/ChatInput'
import { WebSocketClient } from '@/lib/webSocketClient'
import { Message } from '@stomp/stompjs'
import { useChatStore } from '@/store/chatStore'

import  { type Message as ChatMessage} from "@/models/Message"



const ChatsPage = ({ params }:{params: Usable<{id: string}>}) => {
  const { id } = use(params)

  const addMessage = useChatStore(store => store.addMessage)

  const onMessageHandler = (message: Message) => {
    console.log("Full message: ", message)
    console.log("Message body: ",message.body)
    try{
      const newMessage = JSON.parse(message.body)
      addMessage(id, newMessage as ChatMessage)
    }catch(error){
      console.warn(error)
    }
  }
  
  const ws = new WebSocketClient("ws://localhost:8090/ws")
  ws.connect(()=>{
    ws.subscribeToChat(id, onMessageHandler)
  })

  return (
    <div className="h-screen flex flex-col bg-accent">


      {/* Main content grid */}
      <div className="grid grid-cols-8 gap-4 border flex-1 overflow-hidden">
        {/* Chats list */}
        <div className="border col-span-3 bg-white px-4 overflow-y-auto">
          <div className="mb-4">
            <div className="h-[80px] border-b pt-4 items-center text-4xl font-black">
              <div className='flex items-center justify-between'>
                <h1>
                  Chats
                </h1>
                <AddChatMember />
              </div>

            </div>
          </div>
          <ChatList />

        </div>

        {/* Chat area */}
        <div className="border col-span-5 bg-white flex flex-col min-h-0">
          {/* Chat header */}
          <div className="flex p-4 gap-4 border-b h-[80px]">
            <ChatTopBar />
          </div>

          {/* Chat body - takes full remaining height */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages will go here */}
            <ChatMessagesPanel chatId={id} />
          </div>

          {/* Chat input */}
          <div className='p-4'>
            <ChatInput chatId={id} />
          </div>
        </div>

        {/* Notifications */}
        {/* <div className="border col-span-2 bg-white overflow-y-auto">
          <div>
            <div className="h-[80px] border-b px-4 pt-4 items-center text-4xl font-black">
              Notification
            </div>
            <div className="space-y-2">
              <NotificationCard />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ChatsPage
