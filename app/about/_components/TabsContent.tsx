import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Compass, Trophy } from "lucide-react";

export default function AboutTabs() {
  const tabContents = {
    mission: {
      icon: Compass,
      title: "Our Mission",
      content:
        "Our mission at Afro-Asian Education is to assure reliability and ample support to aspiring medics for MBBS Education in Kyrgyzstan. Our dedicated experts provide comprehensive information to the medics and streamline their journey to a thriving career. We offer versatile services, including personalized counseling, university selection, admission processing, visa assistance, and post-admission assistance. We aim to establish substantial relationships with premium medical universities and deliver reliable information and personalized guidance for every individual's unique aspirations and necessities.",
      color: "#e86034",
      image: "/mission.jpg",
    },
    vision: {
      icon: Target,
      title: "Our Vision",
      content:
        "Afro-Asian Education is committed to establishing a commanding impact within the medical sector by encouraging aspiring medical professionals from diverse backgrounds to pursue their dreams of becoming renowned practitioners. We strive to build an affordable and seamless medical education system to bolster students at every step of their journey to study MBBS in Kyrgyzstan. We prioritize spanning extensive educational opportunities across continents and stimulating a positive environment for ambitious medical aspirants. This prompts them to gain meaningful global exposure and flourish inherently in a culturally diverse setting along with building successful careers.",
      color: "#ff7f50",
      image: "/vision.jpg",
    },
    values: {
      icon: Trophy,
      title: "Our Values",
      content:
        "Our values accentuate a steadfast commitment to scholars and their academic pursuits, sustaining the highest standards aligned with core principles, including integrity, transparent communication, and the accurate dissemination of information to medics and their families. Integrity lies at the heart of every decision and recommendation, ensuring ethical considerations and a dedication to truthfulness consistently guide our actions.",
      color: "#ff7d50",
      image: "/value.jpg",
    },
  };

  return (
    <div className="w-full mx-auto px-4 ">
      <Tabs defaultValue="mission" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-xl mb-8">
          {Object.entries(tabContents).map(([key, tab]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md"
            >
              <tab.icon className="w-5 h-5" style={{ color: tab.color }} />
              <span
                className="font-semibold capitalize"
                style={{ color: tab.color }}
              >
                {key}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(tabContents).map(([key, tab]) => (
          <TabsContent
            key={key}
            value={key}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#e86034]/50 to-[#ff7f50]/50 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                  src={tab.image}
                  alt={`${tab.title} Image`}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover w-full h-[350px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div>
                <h2
                  className="text-5xl font-bold mb-4"
                  style={{ color: tab.color }}
                >
                  {tab.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {tab.content}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
