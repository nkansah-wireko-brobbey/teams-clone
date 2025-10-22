"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  LoaderCircle,
  Settings,
  Smile,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Chat } from "@/models/Chat"
import { useRef } from "react"
import _ from "lodash"
import { searchUsers } from "@/lib/api-requests/search-users"
import { User } from "@/models/User"

type CommandDialogSearchMemberProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void,
  onSelect: (user: User) => void
}

export function CommandDialogSearchUsers({ open, onOpenChange, onSelect }: CommandDialogSearchMemberProps) {
  const [users, setUsers] = React.useState<User[]>([])

  const [isPending, startTransition] = React.useTransition()

  const inputRef = useRef<HTMLInputElement>(null)

  const fetchUsers = React.useCallback(
    _.debounce(
      async (searchText: string) => {

        try {
          const response = await searchUsers(searchText)

          console.log(response)


          startTransition(() => {
            setUsers(response.data ?? [])
          })
        }
        catch (error) {
          console.error("Error!")
        }

      }
      , 400)
    , [])


  React.useEffect(() => {
    return fetchUsers.cancel()
  }, [fetchUsers])

  return (
    <>
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <CommandInput placeholder="Type a command or search..." ref={inputRef} onValueChange={(e) => { fetchUsers(e) }} />
        <CommandList>
          {!users.length && !isPending ? (<CommandEmpty>No results found.</CommandEmpty>) : (

            <CommandGroup heading="Suggestions">
              {
                users.map((user) => {
                  return (
                    <CommandItem key={user.id} onSelect={()=>{onSelect(user)}}>
                      <Calendar />
                      <span>{user.email}</span>
                    </CommandItem>
                  )
                })
              }


            </CommandGroup>
          )}
          {isPending &&
            <CommandEmpty>
              <LoaderCircle className="animate-spin" />
            </CommandEmpty>
          }

        </CommandList>
      </CommandDialog>
    </>
  )
}
