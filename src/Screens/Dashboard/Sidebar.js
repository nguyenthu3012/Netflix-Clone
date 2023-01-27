import React from 'react'
import { NavLink } from 'react-router-dom'
import { SideLinks } from '../../Data/SideLink'
import Layout from '../../Layout/Layout'

const Sidebar = ({ children }) => {

  const active = 'bg-dryGray text-subMain'
  const hover = 'hover:text-white hover:bg-main'
  const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4'

  const Hover = ({ isActive }) => (
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`
  )

  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-8 items-start md:py-12 py-6'>
          <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
            {
              // Sidebar links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
          </div>
          <div data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='10'
            data-aos-offset='100'
            className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sidebar