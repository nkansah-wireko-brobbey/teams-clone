import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const ChatCard = () => {
  return (
               <div className='border flex gap-2 p-4 rounded-lg items-center hover:cursor-pointer'>
              <div>
                <Avatar className='size-12'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <span className='font-bold'>Nkansah Wireko-Brobbey</span>
                  <span className='font-medium text-primary'>3:41PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium text-gray-500'>This is a message snippet...</span>
                  <span className='bg-primary rounded-full text-sm w-[20px] h-[20px] text-white font-bold text-center'>12</span>
                </div>
              </div>
              <div>

              </div>
            </div>
  )
}

export default ChatCard