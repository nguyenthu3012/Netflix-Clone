import React from 'react'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'
import about2 from '../assets/image/about2.jpeg'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Interactively grow backend ideas for cross-platform development.',
      icon: FiMail,
      contact: 'minhthu3012000@gmail.com',
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Distinctively exploit optimal alignments for intuitive bandwith.',
      icon: FiPhoneCall,
      contact: '+84 798 990 797',
    },
    {
      id: 3,
      title: 'Location',
      info: 'Hoang Hoa Tham street, Binh Thanh district, Ho Chi Minh city.',
      icon: FiMapPin,
      contact: '',
    }
  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title={'Contact Us'} />
        <div className='grid md:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) => (
              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                  <item.icon />
                </span>
                <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}</a>
                  {` `}{item.info}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs