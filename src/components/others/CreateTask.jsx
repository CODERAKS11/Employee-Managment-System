import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full  items-start justify-between' action="">
        <div className='w-1/2'>
          <div >
            <h3 className='text-sm text-grey-300 mb-1'>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Enter task title' />
          </div>  
            <div>
            <h3 className='text-sm text-grey-300 mb-1'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
          </div>  
           
          <div>
            <h3 className='text-sm text-grey-300 mb-1'>Assign to</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />

          </div>

            <div>
              <h3 className='text-sm text-grey-300 mb-1'>Category</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design, dev, etc ' />

            </div>


          </div>
          <div className='w-1/2'>
            <h3 className='text-sm text-grey-300 mb-1'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-grey-400 border-[1px] ' name="" id="" cols="30" rows="10" placeholder='Enter task description'></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>  
          
            
            
            
        </form>
      </div>


    </div>
  )
}

export default CreateTask
