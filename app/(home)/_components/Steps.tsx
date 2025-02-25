"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Steps = () => {
  const steps = [
    {
      icon: (
        <motion.img
          src="https://edusparkglobal.com/features_icon01.svg"
          alt="Explore"
          width={640}
          height={360}
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Explore Desired Course",
      description: "Explore a wide range of colleges.",
    },
    {
      icon: (
        <motion.img
          src="https://edusparkglobal.com/features_icon02.svg"
          alt="Fill Details"
          width={640}
          height={360}
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Fill Basic Details",
      description: "Provide basic academic details.",
    },
    {
      icon: (
        <motion.img
          src="https://edusparkglobal.com/features_icon03.svg"
          alt="Counselling"
          width={640}
          height={360}
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Get Free Counselling",
      description: "Totally free & unbiased guidance.",
    },
    {
      icon: (
        <motion.img
          src="https://edusparkglobal.com/features_icon04.svg"
          alt="Get Enrolled"
          className="w-auto h-24 text-orange-500"
          whileHover={{ scale: 1.1 }}
        />
      ),
      title: "Get Enrolled",
      description: "Enroll in your desired course.",
    },
  ];

  return (
    <div className="flex h-auto justify-center py-20 items-center mx-auto  w-full bg-[#00306e]">
      <div className="max-w-6xl px-4 w-full h-auto flex flex-col items-center gap-4">
        {/* Section Header */}
        {/* <Button variant="outline" className=" text-left w-1/2">
        Why Afroasian Education
        </Button> */}
        <h2 className=" w-full text-5xl font-bold text-white">
          Simple Steps to Get Enrolled
        </h2>
        <p className=" w-full text-lg text-white">
          Start your learning journey today!
        </p>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 w-full">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-[#00306e] border border-blue-500 text-white shadow-xl"
            >
              <CardHeader className="flex justify-center  items-center">
                {step.icon}
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center p-6">
                <h5 className="text-lg font-bold">{step.title}</h5>
                <p className="text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;