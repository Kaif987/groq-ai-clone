import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Icons } from '../icons'

export default function Chatbox() {
    // const [message, setMessage] = useState("")


    return (
        <div className='absolute bottom-5 w-full max-w-sm sm:max-w-6xl flex items-center justify-center'>
            <div className='flex items-center gap-2 w-full sm:w-4/5 relative'>
                <Input placeholder='Message ChatGPT' className='w-full py-4'
                    autoFocus
                />
                <Button className='absolute right-0'>
                    <Icons.send className='rounded-full' />
                    <span className='sr-only'>Send</span>
                </Button>
            </div>
        </div>
    )
}
