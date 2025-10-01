import apiClient from '@/lib/apiClient'
import { User } from '@/models/User'

export function searchUsers(searchText: string){

    return apiClient.get<User[]>('/users', {params:{search: searchText}})

}