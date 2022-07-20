import React from 'react'
import { GlobalInfo } from './Usecontext/Parent'
import { useContext } from 'react'

const ContextChild3 = () => {

  const {appcolor} = useContext(GlobalInfo)

  return (
    <div>
      <h1 style={{color:appcolor}}>ContextChild3</h1>
    </div>
  )
}

export default ContextChild3
