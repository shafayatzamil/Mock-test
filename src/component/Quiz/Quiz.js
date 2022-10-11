import React from "react";
import "./Quiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMedapps} from 'react-icons/fa';

const Quiz = ({ questions }) => {
//   console.log(questions);
  const {question, options, correctAnswer } = questions;
  const checkTheAns = (ans) => {
    if (ans === correctAnswer) {
        toast('Correct answer✌', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      
    } else {
        toast('Wrong answer🧨', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      
    }
  };
  const iconsClicked=(hint)=>{
    // alert({hint});
    console.log('toasted add');
  }
  return (
    <div className="quiz-container">
      <div className="quiz-heading">
      
        <h2>quiz:{question} <span onClick={()=>iconsClicked(5)} className="icon-fav"><FaMedapps></FaMedapps></span></h2>
      </div>
      <div className="quiz-option">
        {options.map((quizOption) => (
          <div className="option-box" onClick={()=> checkTheAns(quizOption)}>
            <li >{quizOption}</li>
          </div>
        ))}
      </div>
      <ToastContainer />;
    </div>
  );
};

export default Quiz;
