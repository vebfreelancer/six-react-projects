import { useState } from 'react';
import './style.scss';

const questions = [
    {
        title: 'React is ...?',
        variants: ['Library', 'Framework', 'Application'],
        correct: 0,
    },
    {
        title: 'A component is ... ',
        variants: ['Application', 'Part of an application or page', 'what I don\'t know what is'],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
        'This is plain HTML',
        'This is a function',
        'This is the same HTML, but with the ability to execute JS code'
        ],
        correct: 2,
    },
];

function Result({ correct, restart }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
            <h3>You guessed {correct} answers from {questions.length}</h3>
            <button onClick={restart}>Try again</button>
        </div>
    );
}

function Game({ question, step, onClickVariant }) {

    const percentage = Math.round((step + 1) / questions.length * 100);
    
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map((text, index) => 
                        <li key={index} onClick={() => onClickVariant(index)}>
                            {text}
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export const QUIZ = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const onClickVariant = index => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

    const restart = () => {
        setStep(0);
        setCorrect(0);
    };

    return (
        <section className="quiz section-padding">
            <div className='quiz-container container'>
                <div className='quiz-content'>
                    <h2 className='top-title'>QUIZ</h2>
                    <div className='quiz-wrapper'>
                        {
                            step !== questions.length ?
                            <Game question={question} step={step} onClickVariant={onClickVariant} /> :
                            <Result correct={correct} restart={restart} />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};