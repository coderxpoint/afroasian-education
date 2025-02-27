"use client";

import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function ImageSlider() {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      effect: "slide",
      speed: 800,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const logos = [
    "/recorg/12.png",
    "/recorg/13.png",
    "/recorg/14.png.webp",
    "/recorg/15.png.webp",
    "/recorg/16.png",
    "/recorg/17.png",
    "/recorg/18.png.webp",
    "/recorg/19.png",
  ];

  return (
    <div className="w-full bg-white rounded-md shadow-md  max-w-6xl mx-auto p-4 ">
      <div className="swiper w-full relative group">
        <div className="swiper-wrapper">
          <div className="swiper-button- !hidden group-hover:!flex !w-10 !h-10 !bg-white/80  !rounded-full !text-gray-800 after:!text-lg"></div>
          <div className="swiper-button- !hidden group-hover:!flex !w-10 !h-10 !bg-white/80  !rounded-full !text-gray-800 after:!text-lg"></div>
          {/* <div className="swiper-pagination !bottom-0"></div> */}
          {logos.map((logo, index) => (
            <div key={index} className="swiper-slide">
              <div className=" p-4 h-32 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Recognition Organization ${index + 1}`}
                  className=" h-36 max-w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
