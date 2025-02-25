import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <div>
      <section className="bg-[#e86034] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of students who are advancing their careers with our
            comprehensive online courses.
          </p>
          <div className="flex justify-center">
            <Link
              href="/university"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-900 transition-colors"
            >
              View Universities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
