import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='w-full h-screen flex justify-around items-center'>
            <div className="w-[800px] flex flex-col items-center gap-4 py-5">
                <div className='h-[100px] w-[100px]'>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'} width={400} height={400} alt={''} />
                </div>
                <div className='space-y-2 text-center'>
                    <article className='text-5xl font-bold'>Login with Google</article>
                    <span className='text-gray-400'>Wanna start the chat? click to sign in with your google account!</span>
                </div>
                <Button className='font-bold hover:cursor-pointer' size={"lg"}>
                    <a href={'http://localhost:8090/oauth2/authorization/google'}>
                        Let's log U in 😒
                    </a>
                </Button>

            </div>
        </div>
    )
}

export default LoginPage