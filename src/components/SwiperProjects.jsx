import { useState, useRef } from "react";
import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper/modules";

const SwiperProjects = () => {
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
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="card-swiper-container">
              <div className="card-swiper glowing-stars">
                <div className="card-swiper-front">
                  <div className="heading">{project.name}</div>
                  <div className="icons">
                    <a href="#" className="github">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <div className="card-swiper-back">
                  <div className="heading">{project.description}</div>
                  <div className="icons">
                    <a href={project.link} className="github">
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <nav
        className="flex items-center pb-4 justify-center gap-x-1"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-slate-50 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  hover:bg-slate-950 focus:bg-slate-950 transition-colors duration-200 ease-in-out"
          aria-label="Previous"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[32px] min-w-10 flex justify-center items-center border text-slate-50 py-1 px-3 text-sm rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-slate-50 bg-slate-900">
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
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-slate-50 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  hover:bg-slate-950 focus:bg-slate-950 transition-colors duration-200 ease-in-out"
          aria-label="Next"
          onClick={handleNextClick}
        >
          <span className="sr-only">Next</span>
          <IoIosArrowForward />
        </button>
      </nav>
    </>
  );
};

export default SwiperProjects;
