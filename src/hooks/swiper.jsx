import React, { useState, useRef } from "react";
import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import CardSunset from "../components/CardSunset";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { EffectCoverflow } from "swiper/modules";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = projects.length;
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        allowTouchMove={false}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="card-swiper bg-slate-50">
              <div className="info-card">
                <p className="title-card">{project.name}</p>
                <p>{project.description} </p>
              </div>
              <div className="footer-card bg-slate-900 text-slate-100">
                <p className="tag-card">{project.skills}</p>
                <a
                  href="https://github.com/tu-usuario" // Cambia este enlace por el tuyo
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-card bg-slate-950"
                  aria-label="Open GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <CardSunset />
        </SwiperSlide> */}
      </Swiper>
      <nav
        className="flex items-center pb-4 justify-center gap-x-1"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-slate-950 dark:focus:bg-slate-950"
          aria-label="Previous"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[32px] min-w-10 flex justify-center items-center border border-gray-200 text-gray-800 py-1 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-slate-100 dark:text-white dark:bg-slate-900">
            {currentSlide}
          </span>
          <span className="min-h-[32px] flex justify-center items-center text-gray-500 py-1.5 px-1.5 text-sm dark:text-neutral-500">
            of
          </span>
          <span className="min-h-[32px] flex justify-center items-center text-gray-500 py-1.5 px-1.5 text-sm dark:text-neutral-500">
            {totalSlides}
          </span>
        </div>
        <button
          type="button"
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-slate-950 dark:focus:bg-slate-950"
          aria-label="Next"
          onClick={handleNextClick}
        >
          <span className="sr-only">Next</span>
          <IoIosArrowForward />
        </button>
      </nav>
    </>
  );
}
