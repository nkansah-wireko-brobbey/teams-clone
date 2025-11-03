import React from 'react'
import { ChatMessagesPanel } from '../components/ChatMessagesPanel'
import ChatList from '../components/ChatList'
import ChatFilters from '../components/ChatFilters'
import AddChatMember from '../components/AddChatMember'
import ChatTopBar from '../components/ChatTopBar'
import ChatInput from '../components/ChatInput'

const ChatsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  console.log(id)
  return (
    <div className="h-screen flex flex-col bg-accent">
      {/* Header */}
      {/* <div className="h-[100px] px-4 flex items-center border bg-white">
        <span className="text-3xl font-black">Chat Here!</span>

      </div> */}

      {/* Main content grid */}
      <div className="grid grid-cols-8 gap-4 border flex-1 overflow-hidden">
        {/* Chats list */}
        <div className="border col-span-2 bg-white px-4 overflow-y-auto">
          <div className="mb-4">
            <div className="h-[80px] border-b pt-4 items-center text-4xl font-black">
              <div className='flex items-center justify-between'>
                <h1>
                  Chats
                </h1>
                <AddChatMember />
              </div>
            </div>
            <ChatFilters />
          </div>
          <ChatList />

        </div>

        {/* Chat area */}
        <div className="border col-span-4 bg-white flex flex-col min-h-0">
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
