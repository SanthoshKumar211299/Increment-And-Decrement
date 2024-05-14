import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
const[data, setData] =useState('')
const myref = useRef()
const mineref = useRef()
useEffect(()=>{
myref. current. focus ();
},[])
const handleClick =()=>{
console.log(myref.current.value);
mineref.current = myref.current.value
setData(data=>data+1)
}
return(
<div>
    <h1>Using useRef hook</h1>
    <input type='text' placeholder='Enter your name'
    ref={myref}/>
    <input type='text' placeholder='Enter your name' />
    <button onClick={handleClick}>Click</button>
    {mineref. current}
    </div>
    );
};
export default UseRefHook;