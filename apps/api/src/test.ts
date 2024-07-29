import { PrismaClient } from '@repo/db/client'

const prisma = new PrismaClient()

const chat = await prisma.chat.create({
    data: {
        message: "hello world"
    }
})

console.log(chat)