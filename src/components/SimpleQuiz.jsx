import { useState } from "react";
import { Button } from "react-bootstrap";

const questions = [
    { question: "What is 5 + 3?", options: ["6", "8", "9", "7"], answer: "8" },
    { question: "What color is the sky?", options: ["Green", "Blue", "Red", "Yellow"], answer: "Blue" },
    { question: "How many days in a week?", options: ["5", "6", "7", "8"], answer: "7" },
];

export default function QuizApp() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);

    const questionNumber = currentIndex + 1;
    const currentQuestion = questions[currentIndex]

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        if (option === currentQuestion.answer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer("");
    }

    if (currentIndex >= questions.length) {
        return (
            <div>
                <p>Quiz completed!</p>
                <p>Your score: {score} / {questions.length}</p>
            </div>
        );
    }

    return (
        <div>
            <p>Question #{questionNumber}</p>
            <p>{currentQuestion.question}</p>
            {currentQuestion.options.map((option, index) => (
                <Button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </Button>
            ))}
            {selectedAnswer && (
                <p>{selectedAnswer === currentQuestion.answer ? "Correct!" : "Incorrect."}</p>
            )}
            {selectedAnswer && (
                <Button onClick={handleNextQuestion}>
                    Next question!
                </Button>
            )}
        </div>
    );
}