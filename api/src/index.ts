import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
    model: "mixtral-8x7b-32768",
    temperature: 0,
});

const response = await model.invoke("hello ")

console.log(response)
