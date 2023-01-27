import React, { useState } from 'react'
import { Ratings } from '../../Data/MovieData'
import Title from '../Titles'
import { Select, Message } from '../UserdInputs'
import { BsBookmarkStarFill } from 'react-icons/bs'
import Stars from '../Home/Stars'
import { UsersData } from '../../Data/UsersData'
const MovieRates = ({ movie }) => {

  const [rating, setRating] = useState()

  return (
    <div className='my-12'>
      <Title title='Reviews' Icon={BsBookmarkStarFill} />
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
        {/* write review  */}
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>Review "{movie?.name}"</h3>
          <p className='text-sm loading-7 font-medium text-border'>
            Write a review for this movie. IT will be posted on this page.
          </p>
          <div className='text-sm w-full'>
            <Select label={'Select Rating'} options={Ratings} onChange={e => setRating(e.target.value)} />
            <div className='flex mt-4 text-xl gap-2 text-star'>
              <Stars value={rating} />
            </div>
          </div>
          {/* message  */}
          <Message label='Message' placeholder='Make it short and sweet...' />
          {/* submit  */}
          <button className='bg-subMain text-white py-3 w-full flex-colo rounded'>
            Submit
          </button>
        </div>
        {/* REVIEWERS  */}
        <div className='col-span-3 flex flex-col gap-6'>
          <h3 className='text-xl text-text font-semibold'>Reviews (56)</h3>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {
              UsersData.map((user, i) => (
                <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg'>
                  <div className='col-span-2 bg-main hidden md:block'>
                    <img src={user?.image} alt={user?.name} className='w-full h-24 rounded-lg object-cover'/>
                  </div>
                  <div className='col-span-7 flex flex-col gap-2'>
                    <h2>{user?.name}</h2>
                    <p className='text-xs leading-6 font-medium text-text'>
                      {user?.message}
                    </p>
                  </div>
                  {/* rates  */}
                  <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star'>
                    <Stars value={user?.rate}/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieRates