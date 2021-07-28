import {Quiz} from "../../context/quizContext.types"

export type OptionProps = {
    currentQuiz?:Quiz,
    currentQuestionNo: number,
    isClicked: boolean|number,
    handleOption: (a:boolean,b:number) => void
}