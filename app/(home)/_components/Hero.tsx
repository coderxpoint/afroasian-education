"use client";

import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Hero() {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: () => {
          if (swiperRef.current) {
            setActiveIndex(swiperRef.current.realIndex);
          }
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const slides = [
    {
      image: "/slide1.webp",
      alt: "Education",
      title: "Welcome to the World of",
      subtitle: "Quality Education with Global Recognition",
      thumbnail: "/slide1.webp",
    },
    {
      image: "/slide2.webp",
      alt: "Faculty",
      title: "Experience Your Dream in Kyrgyzstan",
      subtitle: "Where Quality Education Matters!",
      thumbnail: "/slide2.webp",
    },
    {
      image: "/slide3.webp",
      alt: "College",
      title: "",
      subtitle: "",
      thumbnail: "/slide3.webp",
    },
  ];

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full lg:h-[75vh] h-[40vh]">
      {/* Swiper Container */}
      <div className="swiper w-full h-full">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide relative">
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-4xl mb-8">{slide.subtitle}</p>
              </div>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Boxes */}
      <div className="absolute hidden bottom-4 left-1/2 transform -translate-x-1/2 z-30 lg:flex gap-4 touch-manipulation">
        {slides.map((slide, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => handleThumbnailClick(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleThumbnailClick(index);
              }
            }}
            className={`
              w-16 h-16 md:w-20 md:h-20 
              rounded-full overflow-hidden 
              cursor-pointer
              transition-all duration-300 ease-in-out
              transform hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-orange-500
              touch-manipulation
              ${activeIndex === index ? 'ring-4 ring-orange-500 scale-110' : 'ring-2 ring-white/50'}
            `}
          >
            <img
              src={slide.thumbnail}
              alt={`Navigate to slide ${index + 1}`}
              className={`
                w-full h-full object-cover
                transition-all duration-300
                ${activeIndex === index ? 'brightness-100' : 'brightness-50 hover:brightness-75'}
              `}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}