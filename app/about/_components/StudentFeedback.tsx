"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Feedback = [
  {
    name: "Ashley Landazo",
    role: "Office Manager",
    company: "RockSauce",
    rating: 5,
    quote:
      "When we onboard our employees, it's really quick and easy. We get to focus on making sure that they're okay and they're happy, and being introduced to the company.",
  },
  {
    name: "BZ Petroff",
    role: "Head of HR",
    company: "Internet Archive",
    rating: 5,
    quote:
      "Zenefits time-off is linked to payroll so I no longer have to chase down PTO requests, saving us substantial money.",
  },
  {
    name: "Mike Kernis",
    role: "CEO",
    company: "Robust Wealth",
    rating: 4,
    quote:
      "It's really painless for me to go from 1-8 employees. It's not an effort. I don't even have to think about it. My onboarding time and hiring time is two minutes for an employee.",
  },
  {
    name: "Mike Kernis",
    role: "CEO",
    company: "Robust Wealth",
    rating: 3,
    quote:
      "It's really painless for me to go from 1-8 employees. It's not an effort. I don't even have to think about it. My onboarding time and hiring time is two minutes for an employee.",
  },
];

export default function StudentFeedback() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Community Feedback
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {Feedback.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="flex-grow">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                    <div className="flex items-center mt-4">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
