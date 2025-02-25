"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Clock } from "lucide-react";
import { EnrollButton } from "@/components/EnrollButton";

// Define Blog type
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  readTime: number;
  category: string;
}

// Dummy API function (replace with actual API call)
async function fetchBlogs(): Promise<Blog[]> {
  // Simulating an API call
  return [
    {
      id: 1,
      title: "MBBS in Kyrgyzstan for Indian Students 2025-26: Fees & Admission",
      excerpt:
        "Are you interested in pursuing your medical degree outside India? Kyrgyzstan offers the best MBBS degree programs to thousands of Indian students every year. It is top-class and highly affordable. ",

      date: "2024-02-10",
      imageUrl: "/programs/1.webp",
      readTime: 5,
      category: "Marketing",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Studying in Kyrgyzstan in 2025",
      excerpt:
        "It is an amazing experience to study in the best facilities of leading global universities in Kyrgyzstan. Students feel comfortable in English-friendly medical classes and enjoy growing up in a multicultural environment.",

      date: "2024-02-08",
      imageUrl: "/programs/2.webp",
      readTime: 7,
      category: "Technology",
    },
    {
      id: 3,
      title: "Admission Consultants for MBBS in Kyrgyzstan",
      excerpt:
        "Kyrgyzstan is one of the top choices for students who wish to pursue medical education abroad. The tuition fee for the entire course is under 18 lakh rupees for Indian students which makes it a very affordable and good option to pursue quality education.",

      date: "2024-02-05",
      imageUrl: "/programs/3.jpg",
      readTime: 6,
      category: "Design",
    },
  ];
}

export default function BlogsHome() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setIsLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (isLoading) {
    return (
      <section className="w-full px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-200 h-80 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-5xl font-bold text-[#00306e]  bg-clip-text mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600  mx-auto">
            Stay updated with our latest articles, trends, and expert insights
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
                {/* Blog Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category and Read Time */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="bg-indigo-50 text-[#e86034] px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{blog.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#e86034] transition-colors h-6 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* 
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700">
                        By {blog.           </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {format(new Date(blog.date), "MMM dd, yyyy")}
                    </span>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 flex items-center text-[#e86034] group-hover:text-[#e86034] transition-colors">
                    {/* <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div> */}
                  {/* <EnrollButton/> */}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-2 bg-[#e86034] text-white rounded-md hover:bg-orange-400 transition-colors"
          >
            View All Blogs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
