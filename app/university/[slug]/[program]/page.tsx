import React from "react";
import { programsDetails } from "@/data/programDetails";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplyUniversity } from "@/components/ApplyToUniversity";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import Link from "next/link";

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
        className="lg:h-[50vh] bg-[url('/programs/1.jpg')] bg-center bg-cover bg-no-repeat h-[20vh] relative flex flex-col space-x-4 w-full items-center mx-auto justify-center overflow-hidden 
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
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Duration Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-[#00306e] mb-4">
                  Duration
                </h3>
                <p className="text-gray-700 text-lg">{programData.duration}</p>
              </CardContent>
            </Card>

            {/* Eligibility Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-[#00306e] mb-4">
                  Eligibility
                </h3>
                <p className="text-gray-700 text-lg">
                  {programData.eligibility}
                </p>
              </CardContent>
            </Card>

            {/* Fee Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-[#00306e] mb-4">
                  Program Fee
                </h3>
                <p className="text-gray-700 text-lg">{programData.fee}</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#00306e] mb-6">
              Why Choose This Program?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Internationally recognized degree</li>
                <li>Expert faculty members with industry experience</li>
                <li>State-of-the-art facilities and infrastructure</li>
                <li>Comprehensive curriculum aligned with global standards</li>
                <li>Excellent career opportunities after graduation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
