import React from 'react'
import { Movies } from '../../../Data/MovieData'
import Table from '../../../Components/Table'
import Sidebar from '../Sidebar'
const MovieList = () => {
  return (
    <Sidebar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Movies List</h2>
                <button className='bg-main font-medium transitions hover:bg-subMain text-white py-3 px-6 rounded'>
                    Delete All
                </button>
            </div>
            <Table data={Movies} admin={false}/>
        </div>
    </Sidebar>
  )
}

export default MovieList