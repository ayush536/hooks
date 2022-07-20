import React from 'react'
import { useState, useMemo } from 'react'

const Usememo = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

     const Increment1 = () => {

      setCounter1(counter1+1)

     }

     const Increment2 = () => {

        setCounter2(counter2+1)

     }

     //if we use multi function normally without using usememo then,it will render on every render whether if we are clicking on it or not
     // but if we usse the same funcgion in usememo and then update the value of anyother function or state , then it will not get re render for other states.
     //it willl only get re render when its state get updated.
     //It takes function as first arguement , and array of second arguement, of that variable that we have to stop from re rerender.
    const multi = useMemo(() =>{
        console.log("work only on counter1")
        return counter1*5
    },[counter1])
    
   
  return (
    <div>
     <h1>counter1 : {counter1}</h1>
     <h2>counter2 : {counter2}</h2>
     <h2> multi : {multi}</h2>

     <button onClick={Increment1}>Increment1</button>
     <button onClick={Increment2}>Increment2</button>

      
     
    </div>
  )
}

export default Usememo