import React from 'react'
import TaskListNumbers from './TaskListNumbers'

const Header = () => {
  return (
    
    <div className='flex items-end  justify-between'>

      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> Sarthak 👋</span></h1>
      <button className='bg-red-500 font-medium text-white text-lg px-5 py-2 rounded-full '>Log Out</button>
      

    </div>
  )
}

export default Header
