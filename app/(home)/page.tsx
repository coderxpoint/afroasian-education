import React from "react";

import Requirements from "./_components/Requirements";
import BannerHome from "./_components/BannerHome";
import StudentSaying from "./_components/StudentSaying";
import BlogsHome from "./_components/BlogsHome";
import Hero from "./_components/Hero";
import AboutHome from "./_components/AboutHome";
import UniversitySection from "./_components/UniversitySection";
import MedicalPrograms from "./_components/MedicalPrograms";
import CallToAction from "@/components/CallToAction";
import Steps from "./_components/Steps";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className=" flex flex-col gap-20">
      <Hero />
      <BannerHome />
      <UniversitySection />
      {/* <AboutHome /> */}
      <MedicalPrograms />
      <Requirements />
      <Steps />
      <StudentSaying />
      <TestimonialsSection />
      {/* <BlogsHome /> */}
      <CallToAction />
    </div>
  );
}
