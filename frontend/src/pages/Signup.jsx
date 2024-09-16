import React from 'react'
import {Header} from '../components/Header.jsx'
import {SubHeading} from '../components/SubHeading.jsx'
import {InputBox} from '../components/InputBox.jsx'
import {Button} from '../components/Button.jsx'
import { BottomWarning } from '../components/BottomWarning.jsx'
 export const  Signup=()=> {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
   
    <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
       <Header label={"Sign Up"} />
       <SubHeading label={"Enter your information to create an account"} ></SubHeading>
       <InputBox label={"FirstName"} placeholder={"john"}/ >
       <InputBox label={"LastName"} placeholder={"Doe"}/ >
       <InputBox label={"Email"} placeholder={"johndoe@example.com"}/ >
       <Button label={"signup"} />
       
       <BottomWarning label={"Already have an account?"} buttonText={"login"} to={"/signin"} ></BottomWarning>
       
       <div>
         
       </div>
       </div>
    </div>
    </div>
  )
}
