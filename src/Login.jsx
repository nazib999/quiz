import React, { useRef } from 'react'

const Login = ({setUserName}) => {
    const useref = useRef();
    const handleClick=()=>{
        setUserName(useref.current.value)
    }
  return (
    <div className='login'>
        
        <input type="text" className='input' ref={useref} placeholder='Type your name'/>
        <button className='btn' type='submit' onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login