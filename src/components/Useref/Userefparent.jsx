import React from "react";
import { useRef } from "react";
import Userefchild from "./Userefchild";



const Userefparent = () => {

 const newref = useRef(null)

 const HandleColor = () => {

  newref.current.style.backgroundColor = "red"

 }



  return (
    <div>
        <Userefchild  handlecolor = {HandleColor}/>
      <button ref={newref}>button1</button>
    </div>
  )
}

export default Userefparent
