import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function CountdownTimer() {

    const [inputTime, setInputTime] = useState("");
    const [currentTime, setCurrentTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);

    const handleStart = () => {
        setCurrentTime(parseFloat(inputTime));
        setTimerRunning(true);
        setTimerFinished(false);
    }

    const handleReset = () => {
        setInputTime("");
        setTimerRunning(false);
        setCurrentTime(0);
        setTimerFinished(false);
    }

    useEffect(() => {
        if (!timerRunning) return;

        const interval = setInterval(() => {
            setCurrentTime(currentTime - 1);
            if (currentTime <= 1) {
                setTimerRunning(false);
                setTimerFinished(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timerRunning, currentTime]);

    return (
        <div>
            <input
                type="number"
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
                placeholder="Enter time in seconds"
            />
            <Button onClick={handleStart}>
                Start Timer
            </Button>

            {timerRunning && (
                <div>
                    <p>{currentTime}</p>
                    <Button onClick={handleReset}>
                        Reset Timer
                    </Button>
                </div>
            )}

            {timerFinished && (
                <p>Times up!</p>
            )}
        </div>
    );
}