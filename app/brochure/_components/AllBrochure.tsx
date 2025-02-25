import React from "react";
import Link from "next/link";
import { universityName } from "@/data/university";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { DownloadBrochure } from "@/components/DownloadBrochure";

export default function AllBrochure() {
  return (
    <section className="w-full pb-20 flex items-center mx-auto px-4 justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-8">
          {universityName.map((university, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:shadow-primary/10"
            >
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
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                {/* <Button
                  className="w-full group bg-[#e86034] hover:bg-orange-400 hover:text-white transition duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <Link href={`${university.download}`} download>
                    Download Brochure
                  </Link>
                  <Download className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button> */}
                <DownloadBrochure/>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section> 
  );
}
