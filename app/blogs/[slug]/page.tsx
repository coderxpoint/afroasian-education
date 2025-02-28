import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

async function getBlogBySlug(slug: string) {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    const post = data.posts.find((post: any) => {
      const postSlug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return postSlug === slug;
    });

    return {
      id: post.id,
      title: post.title,
      content: post.body,
      date: new Date().toISOString(),
      imageUrl: `/programs/${(post.id % 3) + 1}.jpg`,
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <Link href="/blogs">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/blogs">
          <Button variant="outline" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>

      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>By Admin</span>
          <span>•</span>
          <time dateTime={blog.date}>
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </time>
        </div>

        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>
      </div>
    </article>
  );
}
