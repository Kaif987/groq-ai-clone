import React from 'react'
import TemplateQuestionCard from './template-question-card'
import { Icons } from '../icons'
import { KeyOfIcons } from '../icons'

export default function TemplateQuestion() {
    type Question = {
        icon: KeyOfIcons
        question: string
    }

    const questions: Question[] = [
        {
            icon: 'cap',
            question: "Explain Superconductors"
        },
        {
            icon: 'shoppingBag',
            question: "Pick outfit to look good on camera"
        },
        {
            icon: 'bulb',
            question: "What to do with kids art"
        },
        {
            icon: 'terminal',
            question: "Python script for daily email reports"
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center max-w-4xl '>
            <div className='py-20'>
                <Icons.logo className='w-11 h-11' />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {
                    questions.map((question, i) => (
                        <TemplateQuestionCard key={i} icon={Icons[question.icon]} question={question.question} />
                    ))
                }
            </div>
        </div>
    )
}
