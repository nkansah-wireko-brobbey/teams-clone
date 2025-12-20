import NotificationCard from './components/NotificationCard'
import ChatList from './components/ChatList'
import AddChatMember from './components/AddChatMember'
import NoActiveChat from './components/NoActiveChat'

const ChatsPage = () => {
  return (
    <div className="h-screen flex flex-col bg-accent">
      {/* Header */}

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
  

          {/* Chat body - takes full remaining height */}
          <div className="flex-1 p-4 flex items-center justify-center">
            {/* Messages will go here */}
            <NoActiveChat />
          </div>

          {/* Chat input */}

        </div>
      </div>
    </div>
  )
}

export default ChatsPage
