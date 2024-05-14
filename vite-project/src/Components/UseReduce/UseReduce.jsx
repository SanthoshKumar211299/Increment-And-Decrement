import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReduce = () => {
   
    const [ state, dispatch ]=useReducer(ReducerAction,0)
    return (
        <div>
            <h1>Use Reducer</h1>
            <>
            {state}
            </>
            <button  className="Add" onClick={()=>{dispatch({type:'ADD'})}}>Increment by 10</button>
            <button className='Sub' onClick={()=>{dispatch({type:'SUB'})}}>Decrement by 10</button>
           
        </div>
    );
};

export default UseReduce;