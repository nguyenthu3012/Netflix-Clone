import React, { useEffect, useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import Sidebar from '../Sidebar'
import { CategoriesData } from '../../../Data/Categories'
import CategoryModal from '../../../Components/Modals/CategoryModal'
const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [category, setCategory] = useState(false)

  const OnEditFunction = (id) => {
    setCategory(id)
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    if (modalOpen === false) {
      setCategory()
    }
  }, [modalOpen])

  return (
    <Sidebar>
      <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category}/>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Categories</h2>
                <button onClick={() => setModalOpen(!modalOpen)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-subMain text-white py-2 px-4 rounded'>
                    <HiPlus /> Create 
                </button>
            </div>
            <Table2 data={CategoriesData} user={false} OnEditFunction={OnEditFunction}/>
        </div>
    </Sidebar>
  )
}

export default Categories