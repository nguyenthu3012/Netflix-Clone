import React from 'react'
import { HiPlus } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import Sidebar from '../Sidebar'
import { UsersData } from '../../../Data/UsersData'

const Users = () => {
  return (
    <Sidebar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Categories</h2>
                <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-subMain text-white py-2 px-4 rounded'>
                    <HiPlus /> Create 
                </button>
            </div>
            <Table2 data={UsersData} user={true}/>
        </div>
    </Sidebar>
  )
}

export default Users