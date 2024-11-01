import React from 'react'
import {Header} from '../components/Header.jsx'
import {SubHeading} from '../components/SubHeading.jsx'
import {InputBox} from '../components/InputBox.jsx'
import {Button} from '../components/Button.jsx'
import { BottomWarning } from '../components/BottomWarning.jsx'

export const  Signin=()=> {
  return (
 <div className="bg-slate-300 h-screen flex justify-center"> 

<div className='flex flex-col justify-center'>
      <div className=' rounded-lg w-80 h-max text-center bg-white p-2 px-4' >
      <Header label={"Sign In"} />
      <SubHeading label={"Enter your credentials to access your account"} ></SubHeading>
      
      <InputBox label={"Email"} placeholder={"johndoe@example.com"}/ >
      <InputBox label={"Password"} placeholder={""}/ >
      <Button label={"sign In"} />
      
      <BottomWarning label={"Don't have an account?"} buttonText={"Sign please Up"} to={"/signup"} ></BottomWarning>
      
      <div>
    </div>
      </div>
   </div>
    </div>
  )
}
