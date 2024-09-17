import React from 'react'

export const  Balance=({balance}) =>{
  return (
    <div className='flex justify-start p-2'>
    <div className='font-medium '>
      Your Balance 
    </div>
    <div className='font-light ml-4'>
        Rs {balance}
    </div>
    </div>
  )
}
