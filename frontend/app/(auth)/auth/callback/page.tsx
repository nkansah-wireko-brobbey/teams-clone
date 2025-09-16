"use client"
import { Loader2Icon } from 'lucide-react'
import { useSearchParams,useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useAuth } from '../../components/AuthContext'


const AuthCallbackPage = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const {login} = useAuth()

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            login(token);
            router.push("/chats");
        }
    }, [searchParams, router]);

    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <span className='text-3xl font-bold'>Logging in...please wait!</span>
            <Loader2Icon className="animate-spin" />
        </div>
    )
}

export default AuthCallbackPage