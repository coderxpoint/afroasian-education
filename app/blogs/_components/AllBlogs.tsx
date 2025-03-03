"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define WordPress Post type
interface WordPressPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date?: string;
  created_at?: string;
  updated_at?: string;
  slug: string;
  image_url?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

async function fetchPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch("/api/blogs", {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default function AllBlogs() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Refresh data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      loadPosts();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <section className="w-full  px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-200 h-80 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Section with Enhanced Design */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#00306e] mb-6">Our Latest Insights</h1>
          <p className="text-gray-600 text-lg mb-8">Discover expert insights, trends, and knowledge in medical education abroad</p>
          <div className="max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Blog Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image_url || `/programs/1.jpg`}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#e86034] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {post.excerpt &&
                      post.excerpt.split(",").map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-100 text-[#00306e] hover:bg-[#e86034] hover:text-white transition-colors"
                        >
                          {tag.trim()}
                        </Badge>
                      ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-[#00306e]">By Afroasian Education</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {format(
                        new Date(post.created_at || post.date || new Date()),
                        "MMM dd, yyyy"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-3 mt-16">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 hover:bg-[#e86034] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <Button
                key={number}
                onClick={() => paginate(number)}
                variant={currentPage === number ? "default" : "outline"}
                className={`px-5 py-2.5 ${
                  currentPage === number
                    ? "bg-[#e86034] text-white hover:bg-[#e86034]/90"
                    : "hover:bg-[#e86034] hover:text-white transition-colors"
                }`}
              >
                {number}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-[#e86034] hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
