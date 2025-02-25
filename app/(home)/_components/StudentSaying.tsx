"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { Briefcase, Users, ChartBar } from "lucide-react";

const sayings = [
  {
    title: "Student Experience",
    description:
      "Our students have successfully transitioned into their dream careers after completing the program.",
    icon: <Briefcase className="text-slate-900" />,
  },
  {
    title: "Career Growth",
    description:
      "Many of our alumni have reported significant growth in their careers after joining us.",
    icon: <ChartBar className="text-slate-900" />,
  },
  {
    title: "Networking Opportunities",
    description:
      "Join a community of like-minded individuals and expand your professional network.",
    icon: <Users className="text-slate-900" />,
  },
];

export default function StudentSaying() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full max-w-6xl lg:px-0 items-center mx-auto flex justify-center px-4">
      <section className="  ">
        <h4 className="text-5xl font-bold text-[#00306e]  bg-clip-text">
          Student Sayings
        </h4>
        <h2 className="text-lg text-[#2f2f2f] mt-2">What Our Students Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6   w-full">
          {sayings.map((saying, index) => (
            <Card key={index} className="shadow-md bg-white p-6 text-center">
              <CardContent>
                <div className="flex justify-center items-center w-16 h-16 mx-auto bg-orange-400 rounded-full">
                  {saying.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-orange-400">
                  {saying.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {saying.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
