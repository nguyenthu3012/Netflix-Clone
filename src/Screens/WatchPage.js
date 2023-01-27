import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaCloud, FaHeart, FaPlay } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'
import Layout from '../Layout/Layout'
import video from '../assets/video/movie.mp4'

const WatchPage = () => {
    const { id } = useParams()
    const movie = Movies.find((movie) => movie.name === id)
    const [play, setPlay] = useState(false)
  return (
    <Layout>
        <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                <Link to={`/movie/${movie.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                    <BiArrowBack /> {movie?.name}
                </Link>
                <div className='flex-btn sm:w-auto w-full gap-5'>
                    <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                        <FaHeart />
                    </button>
                    <button className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 font-sans py-3 text-sm'>
                        <FaCloud /> Download
                    </button>
                </div>
            </div>
            {/* watch video  */}
            {
                play ? (
                    <video className='w-full h-full rounded' controls autoPlay={play}>
                        <source src={movie?.video ? movie?.video : video} type="video/mp4" title={movie?.name} />
                    </video>
                ): (
                    <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                            <button onClick={() => setPlay(!play)}
                                    className='bg-white text-subMain flex-colo border border-subMain w-20 h-20 rounded-full font-medium text-xl'
                            >
                                <FaPlay />
                            </button>
                        </div>
                        <img src={movie.image ? movie.image : ''} alt={movie.name} className='w-full h-full object-cover rounded-lg' />
                    </div>
                )
            }
        </div>
    </Layout>
  )
}

export default WatchPage