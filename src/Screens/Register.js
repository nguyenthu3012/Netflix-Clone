import React from 'react'
import Layout from '../Layout/Layout'
import logo from '../assets/image/logo.png'
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from '../Components/UserdInputs'
const Register = () => {
  return (
    <Layout>
      <div className='container mx-auto px-2 my-24 flex-colo'>
        <div className='w-full 2xl:w-2/5 gap-8 flex-colo sm:p-14 p-8 md:w-3/5 bg-dry rounded-lg border border-border'>
          <img src={logo} alt="logo" className='w-full h-12 object-contain' />
          <Input label='Fullname' placeholder='Netflix React Tailwind' type='text' bg={true}/>
          <Input label='Email' placeholder='netflix@gmail.com' type='email' bg={true}/>
          <Input label='Password' placeholder='*****' type='password' bg={true}/>
          <Link to='/dashboard' className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
                <FiLogIn /> Sign Up
            </Link>
            <p className="text-center text-border">
                Already have an account?{" "}
                <Link to='/login' className="text-dryGray font-semibold ml-2">Sign Up</Link>
            </p>
        </div>
      </div>
    </Layout>
  )
}

export default Register