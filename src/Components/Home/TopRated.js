import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill, BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stars from "./Stars";
const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  const classNames = 'hover:bg-dry transitions tex-sm rounded w-8 h-8 flex-colo bg-subMain text-white'

  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-2 hovered border h-rate border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button
                    className="w-12 h-12 flex-colo transitions 
                            hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white"
                  >
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movie/${movie.name}`}
                    className="font-semibold text-xl trancuted line-clamp-2"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Stars value={movie.rate}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node => setPrevEl(node))}>
            <BsCaretLeft />
          </button>
          <button className={classNames} ref={(node => setNextEl(node))}>
            <BsCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
