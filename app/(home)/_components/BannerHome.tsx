"use client";

import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: 150,
    label: "ENROLLED STUDENTS",
  },
  {
    value: 2,
    label: "Prominent Universities",
  },
  {
    value: 4,
    label: "COURSES",
  },
  {
    value: 6,
    label: "Years of Proficiency",
  },
];

export default function BannerHome() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the banner is visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Start counting when component becomes visible
    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 50; // Number of steps
      const increment = stat.value / steps;
      let current = 0;
      const timer = setInterval(() => {
        if (current < stat.value) {
          current += increment;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.round(current), stat.value);
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section ref={bannerRef} className="w-full px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="bg-gradient-to-r from-[#e86034] via-indigo-700 to-indigo-900 rounded-3xl shadow-2xl overflow-hidden ">
          <div className="relative h-full">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1),_transparent_50%)]"></div>

            {/* Content */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12 relative h-full items-center justify-center">
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  <div className="text-center space-y-2 group relative flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
                      <span className="bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300 inline-block">
                        {counts[index]}
                        {index !== 0 && "+"}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/80 uppercase font-medium tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                  {/* Add separator after each stat except the last one */}
                  {index < stats.length - 1 && (
                    <div
                      className="hidden md:block absolute top-1/2 -translate-y-1/2"
                      style={{ left: `${(index + 1) * 25}%` }}>
                      <div className="h-16 w-px bg-white/20"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
