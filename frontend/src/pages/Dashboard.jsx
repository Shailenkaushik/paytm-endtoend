import React from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export const  Dashboard=()=> {
  
  return (
    <div className=' w-11/12'>
      <AppBar></AppBar>
      <Balance balance={2000}></Balance>
      <Users></Users>
    </div>
  )
}
