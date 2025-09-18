import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const NotificationCard = () => {
  return (
    <div className='flex gap-2 p-4 rounded-lg items-center hover:cursor-pointer'>
      <div>
        <Avatar className='size-12'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between'>
          <span className='font-bold'>Nkansah Wireko-Brobbey</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium text-gray-500'>This is a message snippet...</span>

        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default NotificationCard