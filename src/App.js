import React, {useState} from 'react';
import './App.css';

const App = () => {

    
    const questions = [
        {
            questionText: "What is the newest us state?",
            answerOptions: [
                { answerText: 'New Mexico', isCorrect: false },
                { answerText: 'Texas', isCorrect: false },
                { answerText: 'Hawaii', isCorrect: true },
                { answerText: 'Florida', isCorrect: false }
            ]
        },
        {
            questionText: "Where is the largest active volcano in the world?",
            answerOptions: [
                { answerText: 'Yellowstone', isCorrect: false },
                { answerText: 'Mauna Loa', isCorrect: true },
                { answerText: 'Mount Fuji', isCorrect: false },
                { answerText: 'Mount Etna', isCorrect: false }
            ]
        },
        {
            questionText: "What is the capital of Thailand?",
            answerOptions: [
                { answerText: 'Vientiane', isCorrect: false },
                { answerText: 'Phnom Penh', isCorrect: false },
                { answerText: 'Bangkok', isCorrect: true },
                { answerText: 'Naypyidaw', isCorrect: false }
            ]
        },
        {
            questionText: "What is the oldest us state?",
            answerOptions: [
                { answerText: 'Delaware', isCorrect: false },
                { answerText: 'Washington', isCorrect: false },
                { answerText: 'New York', isCorrect: false },
                { answerText: 'Maine', isCorrect: true }
            ]
        },
    ]

    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(false);
    const [finalScore, setFinalScore] = useState(0);

    const handleClick = (isCorrect) => {
        if (isCorrect === true){
            setFinalScore(finalScore + 1);
        }
        const nextQuiz = currentQuiz + 1;
        if (nextQuiz < questions.length){
            setCurrentQuiz(nextQuiz);
        } else {
            setScore(true);
        }
    }

    return(
        <div className='container'>
            {
            score ? 
            (
                <div className='score-section'>
                    You scored {finalScore} out of {questions.length}
                </div>
            ) :
            ( 
            <>
                <div className='count'>
                    <span>Question {currentQuiz+1}
                    </span>/{questions.length}
                </div>
                <div className="question-text">
                    {questions[currentQuiz].questionText}
                </div>
                <div className="answer-section">
                    {questions[currentQuiz].answerOptions.map((answerOptions) => 
                    <button onClick={() => handleClick(answerOptions.isCorrect)}>
                    {answerOptions.answerText}
                    </button>
                    )}
                </div>
            </>
            )
            }
        </div>
    )
}

export default App;