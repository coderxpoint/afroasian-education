"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote:
      "Juggling the demands of my medical career and personal responsibilities, I needed an MBBS program that offered both flexibility and academic excellence.  I sincerely appreciate the AfroAsianEducation team for their invaluable support in this crucial decision.",
    author: "Anamika",
  },
  {
    quote:
      "Pursuing my dream of becoming a doctor was a significant decision, and finding the right MBBS program was crucial. AfroAsianEducation made the process seamless by providing detailed insights into various universities, curriculum structures, and admission requirements.",
    author: "Shrey",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f5] text-black py-20 px-4">
      <div className="max-w-6xl flex w-full lg:flex-row flex-col  mx-auto">
        <div className="mb-12">
          <h3 className="text-sm  font-semibold tracking-wider uppercase mb-4">
            TESTIMONIALS
          </h3>
          <div className="flex  gap-4 flex-col justify-center items-start">
            <h2 className="text-5xl   font-bold ">
              Discover why our clients love us.
            </h2>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-transparent">
                  <CardContent className="p-6 ">
                    <div className="flex flex-col items-start gap-6">
                      <blockquote className="text-xl md:text-2xl font-medium">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold ">
                          {testimonial.author}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
