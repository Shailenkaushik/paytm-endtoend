import React, { useState } from 'react'
import {Header} from '../components/Header.jsx'
import {SubHeading} from '../components/SubHeading.jsx'
import {InputBox} from '../components/InputBox.jsx'
import {Button} from '../components/Button.jsx'
import { BottomWarning } from '../components/BottomWarning.jsx'
import axios from 'axios';
// import {axios} from 'axios'
 export const  Signup=()=> {
  
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [username,setUserName]=useState("");
   const [password,setPassword]=useState("");
   
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
   
    <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
       <Header label={"Sign Up"} />
       <SubHeading label={"Enter your information to create an account"} ></SubHeading>
       <InputBox label={"FirstName"} onChange={e=>{
        setFirstName(e.target.value);
       }} placeholder={"john"}/ >
       <InputBox label={"LastName"} onChange={e=>{
        setLastName(e.target.value);
       }}  placeholder={"Doe"}/ >
       <InputBox label={"Email"} onChange={e=>{
        setUserName(e.target.value);
       }}  placeholder={"johndoe@example.com"}/ >
       <InputBox label={"Password"} onChange={e=>{
        setPassword(e.target.value);
       }}  placeholder={"***"}/ >
       <Button label={"signup"} onClick={async()=>{
       const response= await axios.post('http://localhost:3000/api/v1/user/signup',{
          username,
          firstName,
          lastName,
          password
        });
        localStorage.setItem("token",response.data.token);
        
        console.log("post successful");
       }} />
       
       <BottomWarning label={"Already have an account?"} buttonText={"login"} to={"/signin"} ></BottomWarning>
       
       <div>
         
       </div>
       </div>
    </div>
    </div>
  )
}
