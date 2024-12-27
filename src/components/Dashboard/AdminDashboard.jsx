import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <div>
        <form action="">
            <h3>Task Title</h3>
            <input type="text" placeholder='Enter task title' /><br /><br />
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter task description'></textarea>
            <h3>Date</h3>
            <input type="date" />
            <h3>Assign to</h3>
            <input type="text" placeholder='employee name' />
            <h3>Category</h3>
            <input type="text" placeholder='design, dev, etc ' />
            <button>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
