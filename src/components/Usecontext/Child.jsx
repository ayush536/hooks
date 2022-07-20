import React from 'react'
import { GlobalInfo } from './Parent'
import { useContext } from 'react'
import Child2 from './Child2'

const Child = () => {

    const {appcolor} = useContext(GlobalInfo)
  return (
    <div>
     <h1 style={{color:appcolor}}>Child Component</h1>   
     <Child2 />
    </div>
  )
}

export default Child