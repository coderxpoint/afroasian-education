import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";

export default function AboutHome() {
  return (
    <section className="relative flex px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 w-full gap-12 items-center">
        {/* Image Section - Now Appears First */}
        <div className="relative w-full order-1 lg:order-none">
          <Image
            src="/about.png"
            alt="Online Learning"
            width={1000}
            height={1000}
            className="relative z-10"
          />
        </div>

        {/* Text Section - Now Appears Second */}
        <div className="space-y-6 relative z-10 order-2 lg:order-none w-full">
          <div className="inline-flex items-center bg-indigo-50 text-[#e86034] px-4 py-2 rounded-full text-sm">
            <Star className="w-4 h-4 mr-2" />
            Top-Rated Online Learning Platform
          </div>
          <h1 className="text-5xl font-bold text-[#00306e]  bg-clip-text">
            Redefining Excellence in Medical Learning
          </h1>
          <p className="text-xl text-gray-600">
            We offer proficient counseling, personalized guidance, and
            exceptional support to help students transform their aspirations
            into reality. Commence your journey to becoming a healthcare
            professional with our credible admission assistance cell.
            <br />
            We specialize in facilitating placements at leading{" "}
            <Link className="text-[#e86034] font-bold" href="/international-medical-university">
              medical institutes
            </Link>{" "}
            in Kyrgyzstan. Our expert team guarantees maximum placement
            securement to medical aspirants in universally accredited
            institutions, with a streamlined admission process throughout.
          </p>
          <div className="flex flex-grow gap-4">
            <Link
              href="/university"
              className="flex items-center bg-[#e86034] hover:bg-orange-400 text-white px-4 py-2 rounded-md transition-colors"
            >
              Explore University
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="flex items-center bg-[#e86034] hover:bg-orange-400 text-white px-4 py-2 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
