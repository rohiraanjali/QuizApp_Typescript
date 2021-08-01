import { QuizData } from "../context/quizContext.types";
import { ServerError } from "./quizService.types";
import axios, { AxiosError } from "axios"

export async function getQuestion():Promise<QuizData|ServerError>  {
try {
    const {data} = await axios.get<QuizData>(`https://quiztypescript-server.piratey055.repl.co/questions`)
    console.log(data)
    return data;

} catch (error) {
    if(axios.isAxiosError(error)) {
        const serverError = (error as AxiosError<ServerError>)
        if(serverError && serverError.response) {
            return serverError.response.data;
        }
    }
    return error;
}
}