import React from 'react'

 export const  Signup=()=> {
  return (
    <div>
       <div className="font-bold text-4xl pt-6">
        Sign Up
       </div>
       <div className="font-bold text-2xl pt-6">
        Enter your information to create an account
       </div>
       <div>
            <div>
                FirstName <br></br>
                <input type="text" placeholder='john'/>
            </div>
            <div>
                LastName <br></br>
                <input type="text" placeholder='Doe'/>
            </div>
            <div>
                Email <br></br>
                <input type="email" placeholder='johndoe@emample.com'/>
            </div>
            <div>
                Password <br></br>
                <input type="password" placeholder='password'/>
            </div>
       </div>
       <div>
         <button>Sign Up</button>
       </div>
       <div>
         Already have an account? Login
       </div>
    </div>
  )
}
