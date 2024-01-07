import React, { useState,useEffect } from 'react'

const Timer = ({questionNumber,setStop}) => {

    const [time,setTimer] = useState(30);

    useEffect(() => {
      if(time===0)setStop(true);
      const interval = setInterval(() => {
        setTimer((pre)=>pre-1)
      }, 1000);
    
      return () => {
        clearInterval(interval);
      }
    }, [time,setStop]);
    useEffect(() => {
      setTimer(30);
      if(questionNumber===11)
      setStop(true);
      
    }, [questionNumber,setStop])
    
    
  return (
    <div className='time'>
     {time}
    </div>
  )
}

export default Timer