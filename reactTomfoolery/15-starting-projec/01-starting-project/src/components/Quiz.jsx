import { useState , useCallback, } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
        return <Summary 
        userAnswers={userAnswer}
        />
    }




    return <div id="quiz">
        <Question 
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        />
    </div>
}