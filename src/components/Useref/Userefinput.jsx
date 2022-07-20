import React from 'react'
import {useRef} from "react"

const Userefinput = () => {

 let Myref = useRef(null)
 

   const HandleClick = () => {

   Myref.current.value = "1000"
   Myref.current.focus()
   Myref.current.style.color = "red"
  
   } 

  return (
    <div>
        <h1>USE-REF</h1>
        <input ref={Myref} type="text" className='pratik'/>
        <button onClick={HandleClick}>Submit</button>
    </div>
  )
}

export default Userefinput