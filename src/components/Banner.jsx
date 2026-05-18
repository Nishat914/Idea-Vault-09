"use client";

import Link from "next/link";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      title: "Turn Your Ideas Into Reality",
      description:
        "Discover innovative startup concepts, share your vision, and connect with creative thinkers.",
      gradient: "from-mauve-700 via-mauve-500 to-mauve-300",
      overlay: "bg-black/20",
    },
    {
      title: "Share Startup Innovation",
      description:
        "Post your startup ideas, receive feedback, and inspire others with your creativity.",
      gradient: "from-mauve-600 via-mauve-400 to-pink-200",
      overlay: "bg-black/15",
    },
    {
      title: "Build The Future Together",
      description:
        "Explore breakthrough ideas and collaborate on tomorrow's biggest innovations.",
      gradient: "from-mauve-800 via-mauve-600 to-mauve-400",
      overlay: "bg-black/20",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      slidesPerView={1}
      loop={true}
      speed={1200}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full h-125 rounded-2xl overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`relative w-full h-full bg-linear-to-r ${slide.gradient}`}
          >
            <div className={`absolute inset-0 ${slide.overlay}`}></div>

            <div className="relative flex flex-col justify-center items-center text-center h-full px-6 text-white">
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                {slide.title}
              </h1>

              <p className="max-w-2xl text-base md:text-xl mb-8">
                {slide.description}
              </p>

              <Link
                href="/ideas"
                className="btn bg-white text-mauve-600 border-none hover:bg-mauve-100 transition-all duration-300"
              >
                Explore Ideas
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;