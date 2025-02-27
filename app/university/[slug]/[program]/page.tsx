import React from "react";
import { programsDetails } from "@/data/programDetails";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import Link from "next/link";
import { GraduationCap, Award, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ImageSlider from "./_components/ImageSlider";

type ProgramParams = {
  slug: string;
  program: string;
};

export default function ProgramPage({ params }: { params: ProgramParams }) {
  const { slug, program } = params;

  // Find the matching program
  const programData = programsDetails.find(
    (p) => p.slug === slug && p.program === program
  );

  // Handle case where program is not found
  if (!programData) {
    return notFound();
  }

  return (
    <div className="flex flex-col pb-20 gap-20">
      {/* Hero Section */}
      <div
        className="lg:h-[50vh] bg-[url('/programs/1.jpg')] bg-center bg-cover bg-no-repeat h-[50vh] relative flex flex-col space-x-4 w-full items-center mx-auto justify-center overflow-hidden 
        before:absolute before:inset-0 before:bg-black before:opacity-60 before:backdrop-blur-sm"
      >
        <div className="relative z-10 max-w-6xl px-4 w-full gap-2 flex py-10 justify-center items-start h-full flex-col mx-auto">
          <div className="font-thin text-white">
            <Breadcrumb />
          </div>
          <h1 className="text-4xl text-white font-bold">{programData.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl mt-2">
            {programData.description}
          </p>
          <div className="flex flex-col lg:flex-row gap-2 mt-4">
            {/* <ApplyUniversity /> */}
            <Button variant={"destructive"} className="text-white">
              <Link href="https://wa.me/+919818709514">Talk To Counsellor</Link>
            </Button>
            <DownloadBrochure />
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="w-full flex px-4 justify-center items-center">
        <div className="max-w-6xl w-full flex gap-20 flex-col">
          {/* about */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-5xl font-bold text-[#00306e] mb-6">
                  About Kyrgyzstan
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {programData.about}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* about */}

          {/* program details card start */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Duration",
                value: programData.duration,
              },
              {
                title: "Eligibility",
                value: programData.eligibility,
              },
              {
                title: "Program Fee",
                value: programData.fee,
              },
              {
                title: "session",
                value: programData.session,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-[#00306e] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* program details card end */}

          {/* Additional Information start */}
          <div className="">
            <h2 className="text-5xl font-bold text-[#00306e] mb-6">
              Why Choose This Program?
            </h2>
            <div className="bg-gray-50 p-6 gap-2 flex flex-col rounded-lg">
              <span className="text-lg">
                Kyrgyzstan has emerged as a favored destination for students,
                particularly those looking to pursue MBBS abroad. Its
                well-regarded medical universities, cost-effective education
                system, and strong infrastructure make it an attractive option
                for Indian students.
              </span>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Internationally recognized degree</li>
                <li>Expert faculty members with industry experience</li>
                <li>State-of-the-art facilities and infrastructure</li>
                <li>Comprehensive curriculum aligned with global standards</li>
                <li>Excellent career opportunities after graduation</li>
              </ul>
            </div>
          </div>
          {/* Additional Information end */}

          {/* top reasons */}
          <div className="">
            <h2 className="text-5xl font-bold text-[#00306e] mb-6">
              Top Reasons to Study in Kyrgyzstan
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Affordable Tuition Fees",
                  description:
                    "MBBS in Kyrgyzstan is much more budget-friendly compared to private medical colleges.",
                },
                {
                  title: "Globally Accredited Universities",
                  description:
                    "Major medical universities in Kyrgyzstan are recognized by NMC (formerly MCI), WHO, and UNESCO.",
                },
                {
                  title: "English Medium Instruction",
                  description:
                    "Most universities provide MBBS programs in English, facilitating easier learning for Students.",
                },
                {
                  title: "No Donation Required",
                  description:
                    "Unlike many institutions, Kyrgyz universities do not require donations for admission.",
                },
                {
                  title: "Diverse Student Community",
                  description:
                    "You can study alongside peers from around the globe and create lasting international connections.",
                },
              ].map((reason, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-[#00306e] mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* top reasons */}

          {/* quality education  */}
          <div className="">
            <h2 className="text-5xl font-bold text-[#00306e] mb-6">
              Quality Education in Kyrgyzstan
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Quality Education",
                  description:
                    "Kyrgyzstan has several universities that offer MBBS programs recognized by international medical bodies like the World Health Organization (WHO), allowing graduates to practice medicine globally.",
                  icon: GraduationCap,
                },
                {
                  title: "Affordability",
                  description:
                    "Studying MBBS in Kyrgyzstan is often considered affordable compared to many other countries offering medical education. However, affordability can still vary based on factors like the university you choose.",
                  icon: DollarSign,
                },
                {
                  title: "Recognition",
                  description:
                    "The recognition of an MBBS degree obtained in Kyrgyzstan is an important consideration for international students, as it determines whether you'll be able to practice medicine in your home country or in other countries.",
                  icon: Award,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="h-8 w-8 text-[#00306e]" />
                      <h3 className="text-2xl font-semibold text-[#00306e]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* quality education  */}

          {/* Curriculum Structure */}
          <div className="w-full">
            <h2 className="text-5xl font-bold text-[#00306e] mb-6">
              Curriculum Structure
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {programData.curriculum &&
                Object.entries(programData.curriculum).map(
                  ([key, semester]: [string, any]) => (
                    <AccordionItem
                      key={key}
                      value={key}
                      className="bg-white rounded-lg border border-gray-200"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                        <h3 className="text-2xl font-semibold text-[#00306e]">
                          {semester.title}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b">
                                  Course Name
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600 border-b">
                                  Credits
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {semester.courses.map(
                                (course: any, index: number) => (
                                  <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-700 border-b">
                                      {course.name}
                                    </td>
                                    <td className="px-4 py-3 text-right text-[#e86034] font-semibold border-b">
                                      {course.credits} Credits
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
            </Accordion>
          </div>

          <ImageSlider/>

          {/* fees */}
          {/* fees */}
        </div>
      </div>
    </div>
  );
}
