import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Icons } from '../icons'

type TemplateQuestionCardProps = {
    icon: React.ComponentType<{
        className?: string
    }>,
    question: string
}

export default function TemplateQuestionCard(props: TemplateQuestionCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <props.icon />
                </CardTitle>
            </CardHeader>
            <CardFooter className='text-center'>
                {props.question}
            </CardFooter>
        </Card>
    )
}
