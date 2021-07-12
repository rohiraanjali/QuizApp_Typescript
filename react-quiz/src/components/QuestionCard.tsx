import { type } from 'os';
import React from 'react'

type Props = {
 question: string,
 answers: string[],
 callback: any,
 userAnswers: any,
 questionNr: number,
 totalQuestion: number
}
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswers, questionNr, totalQuestion}) => (
    <div>
        <p>Question: {questionNr} / {totalQuestion}</p>
        <p dangerouslySetInnerHTML={{ __html:question }} />
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswers} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html:answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard;
