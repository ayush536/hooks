import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import ContextChild3 from '../ContextChild3'
import Child from './Child'

export const GlobalInfo = createContext()

const Parent = () => {

    const [color,setColor] = useState("red")
  return (
    <GlobalInfo.Provider value={{appcolor:color}}>
    <div>
    <h1>Parent Component</h1>
    <Child />
    <ContextChild3 />
    </div>
    </GlobalInfo.Provider>
  )
}

export default Parent