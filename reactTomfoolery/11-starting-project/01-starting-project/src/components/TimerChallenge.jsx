import { useState,  useRef} from "react";
import ResultModal from './ResultModal.jsx';



export default function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const dialog = useRef();
    const timer = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        setTimerStarted(false);
        clearTimeout(timer.current);
    }

    return <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
        <h2>
            {title}
        </h2>        
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s": ""}
        </p>
        <p>
            <button onClick={timerStarted? handleStop: handleStart}>
                {timerStarted ? "Stop": "Start"} Challenge
            </button>
        </p>
        <p className={timerStarted? "active": undefined}>
            {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
    </section>
    </>
}