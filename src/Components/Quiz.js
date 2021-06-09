import React, {useState,useContext} from 'react';
import { GameStateContext } from "../Helper/Contexts";
import { Questions } from "../Helper/QuestionSet";

function Quiz() {
  const [inputField,setInputField]=useState({promt:"1.what is 15%2?",
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',

  })
    const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );
    const chooseOption = (option) => {
        setOptionChosen(option);
      };
    const nextQuestion=()=>{
        if (Questions[currQuestion].answer === optionChosen){
          console.log(score);
            setScore(score+1);
            
        }
        setCurrQuestion(currQuestion+1);

    
    }
    const finishQuiz=()=>{
        if (Questions[currQuestion].answer ===optionChosen){
            setScore(score+1);
        }
            setGameState("finished");

    }
    return (
        <div className="quiz">
        <h1>{Questions[currQuestion].promt}</h1>
          <div className="options">
            <button onClick={() => {
            chooseOption("option1")
          
          }}>
            {Questions[currQuestion].option1}
            </button>
            <button onClick={() => {
            chooseOption("option2");
          }}>
            {Questions[currQuestion].option2}
            </button>
            <button onClick={() => {
            chooseOption("option3");
          }}>
            {Questions[currQuestion].option3}
            </button>
            <button onClick={() => {
            chooseOption("option4");
          }}>
            {Questions[currQuestion].option4}
            </button>
              
          </div> 
          { currQuestion === Questions.length-1 ?(
              <button onClick={finishQuiz}>
                  Finish Quiz
              </button>

            ):          <button onClick={nextQuestion}>
              Next Question
          </button>
          }
        </div>
    )
}

export default Quiz;
