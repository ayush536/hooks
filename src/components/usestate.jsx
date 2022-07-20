import React from "react";
import { useState } from "react";


const Usestate = () => {

 const [count, setCount] = useState(0)

const Incnum = () => {
    setCount(count+1)
}



  return (
    <div>
     <h1>{count}</h1>
     <button onClick={Incnum}>click</button>
    </div>
  )
}

export default Usestate
