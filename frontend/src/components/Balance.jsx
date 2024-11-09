import React from 'react'

export const  Balance=({balance}) =>{
  return (
    <div className='flex justify-start p-2'>
    <div className='font-medium '>
      Your Balance  is quite good and go for it boy. 
    </div>
    <div className='font-light ml-4'>
        Rs {balance}
    </div>
    </div>
  )
}
