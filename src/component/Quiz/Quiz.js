import React from 'react';
import './Quiz.css';

const Quiz = ({questions}) => {
    console.log(questions);
    const{question,options,correctAnswer}=questions;
    return (
        <div className='quiz-container'>
            <div className='quiz-heading'>
            <h2>quiz:{question}</h2>
            </div>
           <div className='quiz-option'>
           {
                options.map(quizOption=><li>{quizOption}</li>)
            }
           </div>
        </div>
    );
};

export default Quiz;