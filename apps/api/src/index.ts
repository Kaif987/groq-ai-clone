import { prisma } from "@repo/db/client"

// const model = new ChatGroq({
//     model: "mixtral-8x7b-32768",
//     temperature: 0,
// });

// const prisma = new PrismaClient()

const user = await prisma.user.create({
    data: {
        username: "mdkaif@gmail.com",
        lastName: "Khan",
        firstName: "Md",
        password: "kaif@1234"
    },
})

console.log(user)

// const response = await model.invoke("hello ")

// console.log(response)
