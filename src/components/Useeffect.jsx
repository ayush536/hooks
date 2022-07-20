import React from 'react'
import { useState, useEffect } from 'react'

const Useeffect = () => {


   const [count, setCount] = useState(0)
   const [todo, setTodo] = useState(0)

//   useEffect(()=> {
//     console.log("everytime")
//   })
   //this useeffect hook will get called everytime whenever we render or re-render the page.

   //so if you want that useeffect should work only one time whenerver you render the page then simply take an empty array as second input as given below
//    useEffect(()=> {
//       console.log("Only one time")
//    },[])

//and if you want that useeffect should get called on a particular state from above then simply put the variable of that useState in the blank array that we take as second input.
//ex is given below

useEffect(()=> {

    console.log("Particular for the state")
    document.title = `chat${count}`
    //document.title will change the title of your app you see at the top of the tab
},[count])

//so now the useEffect hook will only get called whenever we increment *count* and it will not work for the todo variable

   const Increment = () => {

    setCount(count+1)
    //alert("pratttt")

   }

   const Increments = () => {

    setTodo(todo+1)
    //alert("pratt")
   }

  return (
    <div>
        <h1>USE-EFFECT</h1>
      <button onClick={Increment} >Click me {count}</button>
      <button onClick={Increments} >click me {todo}</button>
    </div>
  )
}

export default Useeffect
