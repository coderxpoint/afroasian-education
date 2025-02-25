import React from "react";
import Link from "next/link";
import { universityName } from "@/data/university";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function AllUniversity() {
  return (
    <section className="w-full pb-20 flex items-center mx-auto px-4 justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8">
          {universityName.map((university, index) => (
            <Link
              key={index}
              href={`/university/${university.name
                .toLowerCase()
                .replace(/ /g, "-")}`}
              className="block transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:shadow-primary/10">
                <div className="relative w-full h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image
                    src={university.image}
                    alt={`${university.name} campus`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {university.name}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {program.name || program.s_name}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 w-full h-full p-2">
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">Duration:</p>
                        <span className="text-gray-700 text-sm">
                          {university.duration}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">Internship:</p>
                        <span className="text-gray-700 text-sm">
                          {university.internship || "N/A"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">Recognitions:</p>
                        <span className="text-gray-700 text-sm">
                          {university.recognitions?.join(", ") || "None"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">NEET Required:</p>
                        <span className="text-gray-700 text-sm">
                          {university.neet_required || "N/A"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">Minimum Percentage:</p>
                        <span className="text-gray-700 text-sm">
                          {university.eligible_criteria?.minimum_percentage ||
                            "N/A"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold ">Required Subjects:</p>
                        <span className="text-gray-700 text-sm">
                          {university.eligible_criteria?.required_subjects?.join(
                            ", "
                          ) || "None"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button
                    className="w-full group bg-[#e86034] hover:bg-orange-400 hover:text-white"
                    size="lg"
                  >
                    Check University
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
