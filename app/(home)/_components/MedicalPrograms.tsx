"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { medicalPrograms } from "@/data/programs";
import { ArrowRight, BookOpen, GraduationCap, Stethoscope } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MedicalPrograms() {
  const iconMap = [Stethoscope, GraduationCap, BookOpen];

  return (
    <section className="w-auto bg-[#005f8d] lg:bg-[url('/collage-bg.jpg')] px-4 bg-cover bg-no-repeat bg-bottom py-20">
      <div className="max-w-6xl mx-auto relative">
        {/* Curvy Shapes */}
        {/* <div className="absolute top-0 left-0 w-full h-32 bg-[#005f8d] transform -skew-y-6"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#00306e] transform skew-y-6"></div> */}

        {/* Section Header */}
        <div className=" w-full mx-auto mb-12 relative z-10">
          <h2 className="text-5xl font-bold text-white bg-clip-text mb-4">
            Explore Medical Programs
          </h2>
          <p className="text-lg text-white  mx-auto">
            Discover comprehensive medical education paths designed to transform
            aspiring healthcare professionals into tomorrow's medical leaders.
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="w-full z-10">
          <CarouselContent className="-ml-1">
            {medicalPrograms.map((program, index) => {
              const ProgramIcon = iconMap[index % iconMap.length];

              return (
                <CarouselItem
                  key={program.title}
                  className="pl-1 gap-4 px-2 lg:px-4 lg:basis-1/3"
                >
                  <div className="group pb-4 relative transform transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute -inset-0.5 rounded-xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-lg transition-all duration-300"></div>

                    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                      {/* Image */}
                      <div className="relative h-48 w-full overflow-hidden md:h-64">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#e86034]/10 p-2 rounded-full">
                            <ProgramIcon className="w-5 h-5 text-[#e86034]" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {program.title}
                          </h3>
                        </div>

                        <div className="flex justify-between items-center">
                          <Link
                            href="/contact"
                            className="group/link flex items-center text-[#e86034] hover:underline"
                          >
                            Know More
                            <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
