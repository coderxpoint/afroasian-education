"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define WordPress Post type
interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

async function fetchPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch("https://snehaltayde.com/wp-json/wp/v2/posts?_embed");
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

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
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
      <section className="w-full px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || `/programs/1.jpg`}
                    alt={post.title.rendered}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 
                    className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#e86034] transition-colors h-6 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <div 
                    className="text-gray-600 mb-4 flex-grow line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700">By Admin</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.date), "MMM dd, yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <Button
                  key={number}
                  onClick={() => paginate(number)}
                  variant={currentPage === number ? "default" : "outline"}
                  className={`px-4 py-2 ${
                    currentPage === number
                      ? "bg-[#e86034] text-white hover:bg-[#e86034]"
                      : ""
                  }`}
                >
                  {number}
                </Button>
              )
            )}

            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      
    </section>
  );
}
