import React from 'react'
import { ModeToggle } from '../ui/toggle'
import { Icons } from '../icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
    return (
        <nav className='flex items-center justify-between py-2 w-full'>
            <h1>
                ChatGPT
            </h1>
            <div className='flex items-center gap-2'>
                <ModeToggle />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}
