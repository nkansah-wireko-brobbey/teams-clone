"use client"
import React from 'react'
import Image from 'next/image'
import AddChatMember from './AddChatMember'

const NoActiveChat = () => {
    return (
        <div className=''>
            <div>
                <Image src={'/speech-bubble.gif'} width={200} height={200} alt={'logo'} />
                <div className='text-center text-2xl font-bold'>
                    No Chats Selected.
                </div>
                <div className='text-center text-gray-400'>Wanna start a chat? <AddChatMember />
                </div>
            </div>
        </div>
    )
}

export default NoActiveChat