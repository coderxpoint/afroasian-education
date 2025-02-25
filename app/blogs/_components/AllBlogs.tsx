"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EnrollButton } from "@/components/EnrollButton";

// Define Blog type
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
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
      title: "Mastering Digital Marketing in 2024",
      excerpt:
        "Discover the latest strategies and tools that are reshaping digital marketing landscape.",
      author: "Emily Rodriguez",
      date: "2024-02-10",
      imageUrl: "/programs/1.jpg",
      readTime: 5,
      category: "Marketing",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "Explore emerging technologies and frameworks that are revolutionizing web development.",
      author: "Alex Chen",
      date: "2024-02-08",
      imageUrl: "/programs/2.jpg",
      readTime: 7,
      category: "Technology",
    },
    {
      id: 3,
      title: "UX Design Principles for 2024",
      excerpt:
        "Learn how to create intuitive and engaging user experiences in the modern digital world.",
      author: "Sarah Thompson",
      date: "2024-02-05",
      imageUrl: "/programs/3.jpg",
      readTime: 6,
      category: "Design",
    },
  ];
}

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <section className="w-full px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="bg-indigo-50 text-[#e86034] px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{blog.readTime} min read</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#e86034] transition-colors h-6 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700">
                        By {blog.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {format(new Date(blog.date), "MMM dd, yyyy")}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center text-[#e86034] group-hover:text-[#e86034] transition-colors">
                    {/* <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div> */}
                  <EnrollButton/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
