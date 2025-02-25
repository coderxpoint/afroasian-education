import React from "react";
import Link from "next/link";
import { loanName } from "@/data/loan";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, CreditCard } from "lucide-react";

const loanCards = [
  {
    title: "HDFC",
    alt: "hdfc loan",
    visit: "hdfc",
    icon: Wallet,
    bg: "bg-orange-50",
    hoverBg: "hover:bg-orange-100",
  },
  {
    title: "ICICI",
    alt: "icici loan",
    visit: "icici",
    icon: CreditCard,
    bg: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
  },
];

export default function AllLoan() {
  return (
    <div className="w-full flex px-4 justify-center items-center pb-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-orange-500 font-medium tracking-wide uppercase mb-4">
            EDUCATION LOANS
          </h3>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Choose Your Preferred Bank
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1  gap-6">
          {loanCards.map((loan, index) => (
            <Link key={index} href={`/loan/${loan.visit}`}>
              <Card
                className={`border-none ${loan.bg} transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <loan.icon className="w-12 h-12 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{loan.title}</h3>
                  <p className="text-gray-600">
                    Explore {loan.title} education loan options
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
