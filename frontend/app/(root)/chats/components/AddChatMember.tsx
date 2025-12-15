"use client"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import { CommandDialogSearchUsers } from './SearchChatMemberForm'
import { User } from '@/models/User'
import { createChats } from '@/lib/api-requests/create-chat'
import { DirectChatRequest } from '@/models/Chat'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const AddChatMember = () => {

    const [open, setOpen] = useState<boolean>(false)

    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    const [isPending, startTransition] = useTransition()

    const router = useRouter()


    const onSelect = (user: User) => {
        if (user == null) return
        setSelectedUser(user)
        console.log("Selected user:", user)
        createChat()
        console.log("Create chat executed")
    }

    const createChat = async () => {
        if (!selectedUser) return;

        const newChat: DirectChatRequest = {
            type: "DIRECT",
            memberUserIds: [String(selectedUser?.id)]
        }

        try {

            const response = await createChats(newChat)

            console.log("Chat's created!")
            router.push("/chats/" + response.data.id)

        } catch (error) {
            toast("An error occurred!", {
                description: error instanceof Error ? error.message : "Unknown error"
            })
        }
    }

    return (
        <div>
            <Button variant="default" size="icon" className="size-8 hover:cursor-pointer" onClick={() => setOpen(prev => !prev)}>
                <Plus />
            </Button>
            <CommandDialogSearchUsers open={open} onOpenChange={setOpen} onSelect={onSelect} />
        </div>
    )
}

export default AddChatMember