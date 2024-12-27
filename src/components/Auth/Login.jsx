import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const SubmitHandler = (e) =>{
        e.preventDefault()
        console.log('Email :' ,email)
        console.log('Password:', password)
        setemail("")
        setpassword("")
        

    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl p-20 border-emerald-600'>
        <form className='flex flex-col items-center justify-center'
            onSubmit={(e)=>{
                SubmitHandler(e)
            }}>
            <input
            value={email}
            
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            required className=' text-white  bg-black outline-none border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-grey-400'     type='email' placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required className='text-white bg-black outline-none border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-grey-400 mt-3'     type='password' placeholder='Enter your password' />
            <button className='text-white mt-5 border-none outline-none  bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>Login</button>
        </form>

    </div>
    </div>
  )
}

export default Login
