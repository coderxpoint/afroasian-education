import React from "react";
import Image from "next/image";
import { GraduationCap, Globe, HandHelping, CheckCircle } from "lucide-react";

export default function HeroAbout() {
  const description =
    "AfroAsian is a steadfast consultancy that fosters exhilarating opportunities for medical aspirants to pursue their MBBS program in Kyrgyzstan. Our mission is to assist the medics by streamlining the international education process and providing comprehensive guidance across all stages of their admission journey. Our experienced team delivers versatile services, including application assistance, documentation support, admission aid, and visa guidance, guaranteeing a smooth and efficient experience throughout. We collaborate with prominent medical universities in Kyrgyzstan and are recognized for our impeccable education, nominal tuition fees, and globally recognized degrees. Afroasian aims to secure a promising future for its healthcare scholars.";

  const highlights = [
    "Application Assistance",
    "Documentation Support",
    "Admission Aid",
    "Visa Guidance",
  ];

  return (
    <div className="w-full  mx-auto px-4 justify-center items-center flex">
      <div className="max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1
              className="text-5xl font-bold leading-tight "
              style={{ color: "#e86034" }}
            >
              About AfroAsian Education
            </h1>

            <div className=" py-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: "#e86034" }}>
              Our Key Services
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-[#e86034] transition-transform group-hover:scale-110" />
                  <span className="text-gray-700 group-hover:text-[#e86034] transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#e86034]/50 to-[#ff7f50]/50 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/about.png"
              alt="AfroAsian Education"
              width={600}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
