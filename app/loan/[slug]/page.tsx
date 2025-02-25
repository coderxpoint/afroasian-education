import React from "react";
import { notFound } from "next/navigation";
import { loanDetails, loanName } from "@/data/loan";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowBigRight, Check } from "lucide-react";
import LoanForm from "../_components/LoanForm";

interface LoanParams {
  slug: string;
}

export async function generateMetadata({ params }: { params: LoanParams }) {
  const { slug } = params;
  const loan = loanName.find((loan) => loan.visit === slug);

  return {
    title: loan ? loan.title : "Loan Details",
  };
}

export default async function LoanDetailsPage({
  params,
}: {
  params: Promise<LoanParams>;
}) {
  const { slug } = await params;

  // Find loan details based on slug
  const loan = loanName.find((loan) => loan.visit === slug);
  const loanDetail = loanDetails.find((detail) => detail.matchTitles === slug);

  if (!loan || !loanDetail) {
    return notFound();
  }

  return (
    <div className="flex flex-col pb-20 gap-20">
      <div
        className="lg:h-[35vh] bg-[url('/contact.jpg')] bg-center bg-cover bg-no-repeat h-[20vh] relative flex flex-col space-x-4 w-full items-center mx-auto justify-center overflow-hidden 
        before:absolute before:inset-0 before:bg-black before:opacity-60 before:backdrop-blur-sm"
      >
        {/* SVG Background */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <path
            fill="#e86034"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
          <path
            fill="#ff7f50"
            fillOpacity="0.2"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Breadcrumb title={loan.title} className="text-white" />
        </div>
      </div>

      {/* Loan Details */}
      <div className="w-full flex px-4 justify-center items-center">
        <div className="max-w-6xl flex w-full">
          <div className="flex gap-20 flex-col justify-center items-center  w-full">
            <div className="flex lg:flex-row flex-col  gap-4 w-full">
              <div className="w-full border rounded-md">
                <img
                  src={loanDetail.image}
                  alt="banner"
                  className="object-center object-cover"
                />
              </div>

              <div className="flex flex-col max-w-3xl w-full items-start justify-center gap-3">
                <h1 className="text-[#e86034] text-4xl font-bold">
                  {loanDetail.title}
                </h1>
                <p className="leading-loose text-lg mb-4 text-gray-900">
                  {loanDetail.desc}
                </p>
                <LoanForm />
              </div>
            </div>

            {/* Banner Content Section */}
            {loanDetail.bannerContent &&
              loanDetail.bannerContent.length > 0 && (
                <div className="w-full border bg-gray-200 rounded-md border-gray-400 p-6 shadow-lg">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                    {loanDetail.bannerText}
                  </h2>
                  <ul className=" grid lg:grid-cols-3 grid-col-1 items-center justify-center gap-4">
                    {loanDetail.bannerContent.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
                      >
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">
                          {item.title}
                        </h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="ml-4">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Best Choice Content Section */}
            {loanDetail.bestChoiceContent &&
              loanDetail.bestChoiceContent.length > 0 && (
                <div className="w-full border bg-gray-200 rounded-md border-gray-400 p-6 shadow-lg">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                    {loanDetail.bestChoiceTitle}
                  </h2>
                  <ul className="flex flex-col  gap-4">
                    {loanDetail.bestChoiceContent.map((item, index) => (
                      <li
                        key={index}
                        className=" flex items-center space-x-2  transition-transform transform hover:scale-95"
                      >
                        <ArrowBigRight />
                        <p className="text-gray-700">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* bank details */}
            {loanDetail.bankOfferTitle &&
              loanDetail.bankOfferTitle.length > 0 && (
                <div className="w-full border bg-gray-200 rounded-md border-gray-400 p-4 shadow-lg md:p-6">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                    Bank Details
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2">
                    {loanDetail.bankOfferContent.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 transition-transform transform hover:scale-95"
                      >
                        <Check />
                        <p className="text-gray-700">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
