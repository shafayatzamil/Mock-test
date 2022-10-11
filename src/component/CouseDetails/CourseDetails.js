import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const CourseDetails = () => {
    const courseDetails=useLoaderData();
    const courseQuestion=courseDetails.data.questions;
    return (
        <div>
            {
                courseQuestion.map(questions=><Quiz key={questions.id} questions={questions}></Quiz>)
            }
        </div>
    );
};

export default CourseDetails;