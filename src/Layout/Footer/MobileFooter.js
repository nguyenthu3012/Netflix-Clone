import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCollectionPlay } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { FiUserCheck } from 'react-icons/fi'
import { CgMenuBoxed } from 'react-icons/cg'
const MobileFooter = () => {
    const active = 'bg-white text-main'
    const inActive = 'transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-mg px-4 py-3'

    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : inActive
    return (
        <>
            <div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
                {/* Drawer  */}
                <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
                    <div className='bg-dry rounded-md flex-btn w-full p-1'>
                        <NavLink to='/movies' className={Hover}>
                            <BsCollectionPlay />
                        </NavLink>
                        <NavLink to='/favourites' className={`${Hover} relative`}>
                            <div className='relative'>
                                <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                                    3
                                </div>
                                <FaHeart className='w-6 h-6' />
                            </div>

                        </NavLink>
                        <NavLink to='/login' className={Hover}>
                            <FiUserCheck />
                        </NavLink>
                        <button className={inActive}>
                            <CgMenuBoxed />
                        </button>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default MobileFooter