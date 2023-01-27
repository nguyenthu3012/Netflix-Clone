import React from 'react'
import notfound from '../assets/image/404.png'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
const NotFound = () => {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img src={notfound} alt="notfound" className='w-full h-96 object-contain'/>
      <h1 className='lg:text-xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page you are looking for does not exist. You may have mistyped the URL.
      </p>
      <Link to={'/'} className='bg-subMain transitions flex-rows py-3 px-6 hover:text-main gap-4 text-white font-medium rounded-md'>
        <BiHomeAlt /> Back Home
      </Link>
    </div>
  )
}

export default NotFound