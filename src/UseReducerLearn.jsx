import React, {useReducer} from 'react'

const initialSate = {count: 0} 

const reducer = (state, action) => {
    switch(action.type){
        case "Increase":
            return {count: state.count +1 }
        
        case "Decrease":
            return {count: state.count -1 }
        
        default:
            return state;
}
}

const UseReducerLearn = () => {
    const [state, dispatch] = useReducer(reducer, initialSate)

    const increaseCount = () => {
       dispatch({type: "Increase"})
    }

    const decreaseCount = () =>{
        dispatch({type: "Decrease"})
    }

  return (
    <>
        <h1>Use Reducer</h1>

        <h2>Count: {state.count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default UseReducerLearn;