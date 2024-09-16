export const InputBox=({label, placeholder})=> {
    return <div>
      <div className='text-sm font-medium text-left py-2'>
                {label} 
            </div>
                <input type="text" className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' placeholder={placeholder}/>
            
    </div>
}

