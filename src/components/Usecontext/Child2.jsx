import React from 'react'
import { GlobalInfo } from './Parent'
import { useContext } from 'react'

const Child2 = () => {

    const {appcolor} = useContext(GlobalInfo)
  return (
    <div>
      <h1 style={{color:appcolor}}>Child2 Components</h1>
    </div>
  )
}

export default Child2
