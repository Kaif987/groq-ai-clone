// create user in db 

import { PrismaClient } from './index'
const prisma = new PrismaClient()

export const createChat = async (data: { message: string }) => {
    return prisma.chat.create({
        data
    })
}

const message = createChat({
    message: "Hello World"
})

message.then(message =>
    console.log(message)
)