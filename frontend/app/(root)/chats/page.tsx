import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const ChatsPage = () => {
  return (
    <div className='border p-4 h-screen space-y-4 bg-accent'>
      <div className='h-[100px] px-4 flex items-center border bg-white'>
        <span className='text-2xl font-black'>Chat Here!</span>
      </div>
      <div className='grid grid-cols-8 gap-4'>

        <div className='border col-span-2 h-[200px] bg-white p-4'>
          <div className='mb-4'>

            <div className='h-[70px] flex items-center text-4xl font-black'>
              Chats
            </div>
            <div className='border flex gap-4 font-medium capitalize'>
              <span>All</span>
              <span>Direct</span>
              <span>Groups</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
        <div className='border col-span-4 bg-white'>

        </div>
        <div className='border col-span-2 bg-white'></div>

      </div>
    </div>
  )
}

export default ChatsPage