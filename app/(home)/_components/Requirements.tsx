import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  CheckCircle,
  HelpCircle,
  User,
  UserCheck,
} from "lucide-react";

const requirementCards = [
  {
    icon: FileText,
    title: "Admission in International Medical University",
    bg: "bg-pink-50",
    hoverBg: "hover:bg-pink-100",
    href: "/university/international-medical-university",
  },
  {
    icon: CheckCircle,
    title: "Admission in Eurasian International University",
    bg: "bg-orange-50",
    hoverBg: "hover:bg-orange-100",
    href: "/university/eurasian-international-university",
  },
  {
    icon: HelpCircle,
    title: "Visa At Your FingerTip",
    bg: "bg-green-50",
    hoverBg: "hover:bg-green-100",
    href: "/visa",
  },
  {
    icon: User,
    title: "Get Loan For Your Dream",
    bg: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
    href: "/loan",
  },
];

export default function Requirements() {
  return (
    <section className="w-full h-full px-4 flex">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 grid-cols-1">
          <div className="max-w-[800px] flex-col gap-6 justify-between flex lg:items-end">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-bold text-[#00306e]  bg-clip-text">
                Why Afroasian Education
              </h2>
              <Link href="#" className="font-semibold text-[#e86034]">
                Study Medicine in Kyrgyzstan – Expert Admission Assistance
              </Link>
              <p className="text-gray-700 max-w-[600px] text-lg">
                Looking to pursue a career in healthcare? We provide expert
                counseling, personalized guidance, and dedicated support to help
                students achieve their medical aspirations. Start your journey
                toward becoming a healthcare professional with our trusted
                admission assistance services.
                <br />
                As{" "}
                <Link
                  className="text-[#e86034] font-bold"
                  href={"/university/eurasian-international-university"}
                >
                  {" "}
                  medical admission consultancy for Kyrgyzstan{" "}
                </Link>
                , we specialize in securing placements at top{" "}
                <Link
                  className="text-[#e86034] font-bold"
                  href="/university/international-medical-university"
                >
                  {" "}
                  medical university{" "}
                </Link>
                in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Kyrgyzstan"
                  className="font-bold"
                >
                  Kyrgyzstan
                </a>
                . Our experienced team ensures maximum admission success in
                globally accredited medical institutions, offering a smooth and
                hassle-free application process.
              </p>
              <Link href="#" className="font-semibold text-[#e86034]">
                Enroll today and turn your dream of studying MBBS in
                Kyrgyzstan into reality!
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {requirementCards.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card
                  className={`border-none ${feature.bg} transition-transform transform hover:scale-105 shadow-md hover:shadow-lg rounded-lg  w-full`}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">
                      <feature.icon className="w-12 h-12 text-gray-800" />
                    </div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
