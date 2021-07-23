import { ScoreBoard } from "../context/quizContext.types";

export type ScoreBoardData = {
    scoreBoard: ScoreBoard[]
}

export type ServerError =  {
    name:string;
    status:number;
}