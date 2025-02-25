import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const timelineItems = [
  {
    title: "Counselling Session",
    desc: "Join our interactive counseling sessions for aspiring medics to comprehend the financial facets of education, the quality of distinctive medical programs, and the vibrant student life in Kyrgyzstan.",
  },
  {
    title: "Course Guidance",
    desc: "We assist medical aspirants in determining programs aligning with their career objectives and strengths.",
  },
  {
    title: "Visa Assistance",
    desc: "Our visa specialists streamline the visa application process for international students pursuing medical education, ensuring efficiency and effective oversight.",
  },
  {
    title: "Documents Assistance",
    desc: "We provide guardians with essential documentation and visa requirements, ensuring they fully understand and support their children's educational endeavors overseas.",
  },
  {
    title: "Cost Estimation",
    desc: "Our specialized counseling sessions emphasize the financial implications of medical education, explore the caliber and global accreditation of medical programs, and delve into the cultural richness and dynamic student life available in Kyrgyzstan for prospective medical students.",
  },
  {
    title: "Travel Assistance",
    desc: "We arrange flights and secure the best travel deals for students, ensuring smooth connections. Additionally, we aid foreign exchange and support booking flights on the right dates.",
  },
];

export default function AbroadServices() {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="max-w-6xl flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-extrabold text-center text-[#e86034] mb-8">
          Our Study Abroad Services
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineItems.map((item, index) => (
            <Card
              key={index}
              className="w-full bg-gradient-to-r from-orange-200 to-orange-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-2 border border-orange-300"
            >
              <CardHeader className="flex flex-col items-start">
                <CardTitle className="text-orange-700 font-bold text-2xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-700 mt-2 text-lg leading-relaxed">
                  {item.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
