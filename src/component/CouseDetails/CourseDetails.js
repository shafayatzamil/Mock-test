import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails=useLoaderData();
    const courseQuestion=courseDetails.data.questions;
    console.log(courseQuestion);
    return (
        <div>
            {
                courseQuestion.map(questions=><h2 key={questions.id} >{questions.question}?</h2>)
            }
        </div>
    );
};

export default CourseDetails;