import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    title: "Are study abroad consultants good?",
    desc: "Yes, Afroasian Education specializes in international admissions,  leveraging strong connections to simplify complex foreign  education processes for individuals.",
  },
  {
    title: "Which course is best abroad",
    desc: "Best courses abroad encompass Business Administration, Engineering, Computer Science, Healthcare Management, Mathematics, Statistics, Foreign Languages, Nursing, and Law, among others.",
  },
  {
    title: "Which highly demanding jobs abroad?",
    desc: "High-demand occupations abroad include Healthcare Professionals, IT Specialists, Hospitality Workers, Trade Experts, Statisticians, and Mathematicians, mirroring global market trends and essentials.",
  },
];

export default function Faq() {
  return (
    <div className="pb-20 w-full flex items-center mx-auto px-4 justify-center">
      <div className="w-full flex flex-col max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-[#e86034] mb-8">
          What are you looking for?
        </h1>
        <Accordion type="single" collapsible>
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-2xl font-bold">{item.title}</AccordionTrigger>
              <AccordionContent className="text-lg">{item.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
