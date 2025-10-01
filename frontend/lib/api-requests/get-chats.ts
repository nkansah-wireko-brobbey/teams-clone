import apiClient from '@/lib/apiClient'
import { Chat } from '@/models/Chat'

export function getChats(chatId?: number){

    return apiClient.get<Chat[]>('/chats', {params:{chatId}})

}