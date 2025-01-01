import { useState , useCallback} from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(e) {
        setUserAnswer((prevAnswers) => {
            return [...prevAnswers, e];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {handleSelectAnswer(null)}, [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="summary"> 
        <img src={quizComplete} alt="Trophy" />
            <h2>Quiz Complete!</h2>
        </div>
    }


    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - .5);

    return <div id="quiz">
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout ={handleSkipAnswer} key={activeQuestionIndex} />
        <h2> 
            {QUESTIONS[activeQuestionIndex].text}
        </h2>
        <ul id="answers">{shuffledAnswers.map((answer) => 
            <li key={answer} className="answer">
                <button onClick={(e) => {handleSelectAnswer(answer)}}>{answer}</button>
                </li>)}
        </ul>
    </div>
    </div>
}