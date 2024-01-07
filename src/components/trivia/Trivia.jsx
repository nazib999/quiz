import React, { useState ,useEffect } from 'react'
import './trivia.css'

const Trivia = ({data,questionNumber,setStop,setQuestionNumber}) => {
   const [question,setQuestion] = useState(null);
   const [classname,setClassName] = useState('answer');
   const [selected,setSelected] = useState(null);
    useEffect(() => {
      setQuestion(data[questionNumber-1])
    
      return () => {
        
      }
    }, [data,questionNumber])
    useEffect(() => {
      
      return () => {
       
      }
    }, [])
    const handleSelect=(q)=>{
      setSelected(q);
      setClassName('answer active');
      setTimeout(() => {
        setClassName(q.correct?"answer correct":"answer wrong");
        
      }, 3000);
      setTimeout(() => {
        if(q.correct){
          setQuestionNumber((pre)=>pre+1)
        }
        else{
          setStop(true)
        }
        
      }, 6000);

    }
    
  return (
    <div className='trivia'>
      
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((q)=>
            <div className={selected===q?classname:'answer'} onClick={()=>handleSelect(q)}>{q.text}</div>)}
            
           
        </div>
    </div>
  )
}

export default Trivia