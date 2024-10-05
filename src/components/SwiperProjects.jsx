import { useState, useRef } from "react";
import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import CardSunset from "./CardSunset";

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
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div class="container">
              <div class="card">
                <div class="front">
                  <p class="heading"> Front Card </p>
                </div>
                <div class="back">
                  <p class="heading">Follow Me</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    class="bi bi-person-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
                  </svg>

                  <div class="icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </div>
                </div>
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
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-slate-50 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  hover:bg-slate-950 focus:bg-slate-950"
          aria-label="Previous"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[32px] min-w-10 flex justify-center items-center border text-slate-50 py-1 px-3 text-sm rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-slate-100 bg-slate-900">
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
          className="min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-slate-50 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  hover:bg-slate-950 focus:bg-slate-950"
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
