import React from "react";
import { universityName } from "@/data/university";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ApplyUniversity } from "@/components/ApplyToUniversity";
import Image from "next/image";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import Head from "next/head";

interface UniversityParams {
  slug: string;
}

// Function to generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: UniversityParams;
}) {
  const { slug } = params;
  const university = universityName.find((uni: any) => uni.visit === slug);

  return {
    title: university ? university.name : "University Details",
    description: university
      ? university.description
      : "Details about the university.",
    keywords: university
      ? `${university.name}, ${university.location}, ${university.programs
          .map((program: any) => program.name)
          .join(", ")}`
      : "university, education, programs",
  };
}

// Main component for the university details page
export default function UniversityPageDetails({
  params,
}: {
  params: UniversityParams;
}) {
  const { slug } = params;
  const university = universityName.find((uni: any) => uni.visit === slug);

  if (!university) {
    return notFound();
  }

  return (
    <div className="flex flex-col bg-white pb-20 gap-20">
      <Head>
        <title>{university.name}</title>
        <meta name="description" content={university.description} />
        <meta
          name="keywords"
          content={`${university.name}, ${
            university.location
          }, ${university.programs
            .map((program: any) => program.name)
            .join(", ")}`}
        />
      </Head>
      {/* University Details */}
      <div className="w-full gap-20 flex flex-col mx-auto">
        {/* Full-width image with overlay */}
        <div className="relative">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-[80vh] object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-col   text-white bg-black bg-opacity-50">
            <div className="max-w-6xl px-4 w-full gap-2 flex py-10 justify-center items-start h-full flex-col mx-auto">
              <div className="font-thin">
                <Breadcrumb />
              </div>
              <h1 className="text-4xl">{university.name}</h1>
              <span className="text-lg">Location: {university.location}</span>
              <span className="text-lg">
                Recognitions: {university.recognitions?.join(", ")}
              </span>
              <span className="text-lg">
                Established: {university.established}
              </span>
              <span className="text-lg">
                NEET Required: {university.neet_required}
              </span>

              <div className=" flex flex-col lg:flex-row gap-2">
                {/* <Button className="text-white bg-orange-600 hover:bg-orange-400 font-semibold">
                  Apply To University
                </Button> */}
                <ApplyUniversity />

                <Button variant={"destructive"} className="text-white ">
                  <Link href="https://wa.me/+919818709514 ">
                    Talk To Counsellor
                  </Link>
                </Button>

                <DownloadBrochure />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto  justify-center">
          <div className=" w-full  mx-auto flex flex-col gap-20 items-center justify-center">
            {/* About Section */}

            <div className="w-full max-w-6xl lg:px-0 px-4  flex flex-col gap-8 ">
              <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-bold text-gray-800 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-500">
                  About {university.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {university.description}
                </p>
              </div>
            </div>

            {/* corses */}
            <div className="w-full lg:bg-[url('/collage-bg.jpg')] bg-blue-800 bg-bottom items-center  py-20 px-5  flex flex-col">
              <h2 className="text-4xl font-bold  max-w-6xl w-full text-white relative pb-4">
                Programs Offered at {university.name}
              </h2>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full  max-w-6xl mt-6"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {university.programs.map((program, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-1/2 lg:basis-1/3 "
                    >
                      <div className="relative w-full h-[30dvh] ">
                        <Image
                          src={program.images || "/default-image.jpg"}
                          alt={program.name || "Program Image"}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>

                      {/* Program Details */}
                      <div className="text-gray-600 bg-gray-200 p-4 rounded-md text-sm leading-relaxed mt-2">
                        <h3 className="font-semibold text-xl  bg-gray-200 text-gray-900 text-left mt-3">
                          {program.name || program.s_name}
                        </h3>
                        <p>
                          <strong>Medium of Instruction:</strong>{" "}
                          {program.medium}
                        </p>
                        <p>
                          <strong>Duration:</strong> {program.duration}
                        </p>
                        <p>
                          <strong> Session:</strong> {program.session}
                        </p>
                        <button className="bg-orange-500 text-white  text-center py-2 px-4 rounded-md mt-4 hover:bg-orange-600">
                          <Link
                            // href={`/university/${university.visit}/${program.visit}`}
                            href={`#`}
                          >
                            View Details
                          </Link>
                        </button>
                      </div>

                      {/* View Details Button */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>

            {/* Student Life Section */}
            <div className="w-full max-w-6xl lg:px-0 px-4  flex flex-col">
              <h2 className="text-4xl font-bold text-gray-800 relative pb-4 ">
                Student Life in {university.location}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 w-full">
                {university.student_life?.map((life, index) => (
                  <Card
                    key={index}
                    className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
                  >
                    <h3 className="font-semibold text-2xl mb-3 text-gray-900">
                      {life.sltitle}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {life.sldesc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="w-full bg-gray-100 lg:px-0 px-4 flex flex-col">
              <div className="max-w-6xl w-full flex items-center justify-center py-20 flex-col mx-auto">
                <h2 className="text-4xl font-bold  relative pb-4">
                  {university?.overview?.title}
                </h2>
                <Table className="mt-6 w-full border border-gray-300 rounded-lg shadow-lg">
                  <TableHeader>
                    <TableRow className="bg-gray-200">
                      <TableHead className="p-4 text-left text-gray-600">
                        Title
                      </TableHead>
                      <TableHead className="p-4 text-left text-gray-600">
                        Description
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-lg">
                    <TableRow className="hover:bg-gray-50  transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        University Recognitions
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.university_recognitions.join(
                          ", "
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        Medium of Teaching
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.medium_of_teaching}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        MBBS Course Duration
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.mbbs_course_duration}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        Eligibility Criteria
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        Minimum Percentage:{" "}
                        {
                          university.overview?.eligibility_criteria
                            .minimum_percentage
                        }{" "}
                        <br />
                        Subjects:{" "}
                        {university.overview?.eligibility_criteria.subjects.join(
                          ", "
                        )}{" "}
                        <br />
                        Age Requirement:{" "}
                        {
                          university.overview?.eligibility_criteria
                            .age_requirement
                        }{" "}
                        <br />
                        NEET Score Required:{" "}
                        {
                          university.overview?.eligibility_criteria
                            .neet_score_required
                        }
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        Academic Session
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.academic_session.join(", ")}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        Requirement of IELTS/TOEFL
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.requirement_of_ielts_toefl}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
                      <TableCell className="p-4 border-b border-gray-200">
                        University Recognitions
                      </TableCell>
                      <TableCell className="p-4 border-b border-gray-200">
                        {university.overview?.university_recognitions.join(
                          ", "
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className=" p-4 bg-gray-200 font-semibold"
                      >
                        Overview of {university.name}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>

            {/* Why Study MBBS Section */}
            <div className="w-full max-w-6xl lg:px-0 px-4 flex flex-col">
              <h2 className="text-4xl font-bold text-gray-800 relative pb-4">
                {university.why_study.title}
              </h2>

              <div className="flex flex-col gap-8 mt-6 relative">
                {university.why_study.description.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 relative">
                    <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full relative z-10 mt-2" />
                    {index !== university.why_study.description.length - 1 && (
                      <div className="absolute top-4 left-[5px] w-[2px] h-[calc(100%+1rem)] bg-orange-200 -z-0" />
                    )}
                    <p className="text-lg text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria Section */}
            <div className="w-full bg-gray-100 lg:px-0 px-4 flex flex-col items-center">
              <div className="max-w-6xl w-full flex items-center justify-center py-20 flex-col mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 relative pb-4 ">
                  {university.eligibilityCriteriaMain.title}
                </h2>

                <ul className="list-disc list-inside bg-orange-600 rounded-md shadow-md px-3 py-2 text-white mt-6 space-y-3 w-full">
                  {university.eligibilityCriteriaMain.description.map(
                    (point, index) => (
                      <li key={index} className="text-lg leading-relaxed">
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Admission Process Section */}
            <div className="w-full max-w-6xl lg:px-0 px-4 flex flex-col">
              <h2 className="text-4xl font-bold text-gray-800 relative pb-4">
                {university.steps.title}
              </h2>

              <div className="flex flex-col gap-8 mt-6 relative">
                {university.steps.stepdesc.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold relative z-10">
                      {index + 1}
                    </div>
                    {/* Vertical connecting line */}
                    {index !== university.steps.stepdesc.length - 1 && (
                      <div className="absolute top-8 left-4 w-[2px] h-[calc(100%+1rem)] bg-orange-200 -z-0" />
                    )}
                    <p className="text-lg text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="w-full bg-gray-100 lg:px-0 px-4 flex flex-col">
              <div className="max-w-6xl  w-full flex items-center justify-center py-20 flex-col mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 relative pb-4 ">
                  {university.documentsRequired.title}
                </h2>

                <Table className="w-full mt-6 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="text-left font-semibold text-gray-800 px-4 py-3">
                        Document Name
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-lg">
                    {university.documentsRequired.documents.map(
                      (document, index) => (
                        <TableRow
                          key={index}
                          className="border-b hover:bg-gray-50 transition"
                        >
                          <TableCell className="px-4 py-3 text-gray-700">
                            {document}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="w-full max-w-6xl lg:px-0 px-4 mx-auto ">
              <h2 className="text-4xl font-bold text-gray-800 pb-4">
                Afro-Asian Education: Your Path to MBBS in Kyrgyzstan
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Afro-Asian Education specializes in facilitating access to
                high-quality medical education for students across Africa and
                Asia. We provide comprehensive support for MBBS admissions in
                Kyrgyzstan, ensuring a seamless process from initial counseling
                to final enrollment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed ">
                Through strong partnerships with top Kyrgyz medical
                universities, we help students secure placements at reputable
                institutions known for their affordability and academic
                excellence. Our commitment to **transparency, student-centric
                services, and cultural inclusivity** enables aspiring medical
                professionals to transition smoothly into their education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By equipping students with the right guidance and resources, we
                empower them to advance their careers and contribute effectively
                to global health initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
