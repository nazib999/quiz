import React, { useState,useEffect } from "react";
import "./App.css";
import Trivia from "./components/trivia/Trivia";
import Timer from "./components/Timer";
import Login from "./Login";

const pyramid = [
  { id: 1, amount: "$ 100" },
  { id: 2, amount: "$ 200" },
  { id: 3, amount: "$ 300" },
  { id: 4, amount: "$ 400" },
  { id: 5, amount: "$ 500" },
  { id: 6, amount: "$ 600" },
  { id: 7, amount: "$ 700" },
  { id: 8, amount: "$ 800" },
  { id: 9, amount: "$ 900" },
  { id: 10, amount: "$ 1000" },
].reverse();

const data = [
  {
    id: 1,
    question: "When was React first released?",
    answers: [
      {
        text: "2013",
        correct: true,
      },
      {
        text: "2014",
        correct: false,
      },
      {
        text: "2016",
        correct: false,
      },
      {
        text: "2018",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What are the key features of React.js?",
    answers: [
      {
        text: "Virtualdom",
        correct: false,
      },
      {
        text: "Fast",
        correct: true,
      },
      {
        text: "Seo",
        correct: false,
      },
      {
        text: "Efficient",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "What is the significance of the virtual DOM in React.js?",
    answers: [
      {
        text: "Modern",
        correct: false,
      },
      {
        text: "Friendly",
        correct: false,
      },
      {
        text: "Reactive",
        correct: true,
      },
      {
        text: "Easy use",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "When was React first released?",
    answers: [
      {
        text: "2013",
        correct: true,
      },
      {
        text: "2014",
        correct: false,
      },
      {
        text: "2016",
        correct: false,
      },
      {
        text: "2018",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What are the key features of React.js?",
    answers: [
      {
        text: "Virtualdom",
        correct: false,
      },
      {
        text: "Fast",
        correct: true,
      },
      {
        text: "Seo",
        correct: false,
      },
      {
        text: "Efficient",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "What is the significance of the virtual DOM in React.js?",
    answers: [
      {
        text: "Modern",
        correct: false,
      },
      {
        text: "Friendly",
        correct: false,
      },
      {
        text: "Reactive",
        correct: true,
      },
      {
        text: "Easy use",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "When was React first released?",
    answers: [
      {
        text: "2013",
        correct: true,
      },
      {
        text: "2014",
        correct: false,
      },
      {
        text: "2016",
        correct: false,
      },
      {
        text: "2018",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "What are the key features of React.js?",
    answers: [
      {
        text: "Virtualdom",
        correct: false,
      },
      {
        text: "Fast",
        correct: true,
      },
      {
        text: "Seo",
        correct: false,
      },
      {
        text: "Efficient",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the significance of the virtual DOM in React.js?",
    answers: [
      {
        text: "Modern",
        correct: false,
      },
      {
        text: "Friendly",
        correct: false,
      },
      {
        text: "Reactive",
        correct: true,
      },
      {
        text: "Easy use",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "When was React first released?",
    answers: [
      {
        text: "2013",
        correct: true,
      },
      {
        text: "2014",
        correct: false,
      },
      {
        text: "2016",
        correct: false,
      },
      {
        text: "2018",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What are the key features of React.js?",
    answers: [
      {
        text: "Virtualdom",
        correct: false,
      },
      {
        text: "Fast",
        correct: true,
      },
      {
        text: "Seo",
        correct: false,
      },
      {
        text: "Efficient",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "What is the significance of the virtual DOM in React.js?",
    answers: [
      {
        text: "Modern",
        correct: false,
      },
      {
        text: "Friendly",
        correct: false,
      },
      {
        text: "Reactive",
        correct: true,
      },
      {
        text: "Easy use",
        correct: false,
      },
    ],
  },
];
const App = () => {
  const [stop, setStop] = useState(false);
  const [questionNumber,setQuestionNumber]= useState(1);
  const [earned,setEarned]=useState('$ 0');
  const [userName,setUserName] = useState(null);

  useEffect(() => {
    questionNumber>1 && 
    setEarned(pyramid.find((f)=>f.id===questionNumber-1).amount)
    
  }, [questionNumber])
  
  if(userName){
    return (
      <div className="app">
        
          <div className="main">
          {stop ? (
            <><h1 className="stopper">You have earned {earned} </h1></>
          ) : (
            <>
              
              <div className="top">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
              <div className="bottom">
                <Trivia stop={stop} setStop={setStop} data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <div className="itemWrapper">
            {pyramid.map((p) => (
              <div className={p.id===questionNumber?"item active":"item"}>
                <div className="itemNumber">{p.id}</div>
                <div className="itemAmount">{p.amount}</div>
              </div>
            ))}
          </div>
        </div>
       
          
       
      </div>
    );
  }
  else{
    return <Login setUserName={setUserName}/>
  }
  
}

export default App;
