import React from "react";

export default function AllVisa() {
  return (
    <div className="w-full flex items-center  justify-center px-4 mx-auto">
      <div className="max-w-6xl flex flex-col w-full">
        <div className="grid lg:grid-cols-2 gap-4 items-center justify-center grid-cols-1 w-full">
          <div className="w-full border rounded-md">
            <img src="/study-abroad-visa.jpg" className="w-full rounded-md" />
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-[#e86034] text-4xl font-bold">Study Abroad</h1>
            <p className=" leading-relaxed mb-4 text-lg text-gray-900">
              Afroasian Education is a leading educational consultancy with
              robust connections within the international education sector,
              where our professional team effectively streamlines the
              intricacies of foreign admission processes tailored to fulfill
              individual aspirants' needs. Our visa specialists facilitate
              medical education for international students by optimizing and
              supervising the visa application process. We entrust their
              guardians with crucial documentation and visa prerequisites,
              ensuring their complete understanding and confidence in their
              children's educational pursuits abroad. Our interactive counseling
              sessions accentuate the financial aspects of education, the
              quality and global recognition of medical programs, rich cultural
              diversity, and vibrant student life in Kyrgyzstan to aspiring
              medics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
