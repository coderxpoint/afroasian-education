"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Define a type for the blog post
interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  image_url: string;
  excerpt: string;
  created_at: string;
  updated_at: string;
}

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    image_url: "",
    excerpt: "",
  });

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get<Blog[]>("/api/blogs");
      setBlogs(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Add authorization header for the API call
      const headers = {
        authorization: "Bearer token", // Replace with actual token or auth mechanism
      };

      const response = await axios.delete(`/api/blogs?id=${id}`, { headers });
      if (response.status === 200) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to delete blog");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const formattedValue = name === "slug" ? value.replace(/\s+/g, "-") : value;
    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add authorization header for the API call
      const headers = {
        authorization: "Bearer token", // Replace with actual token or auth mechanism
      };

      const response = await axios.post("/api/blogs", formData, { headers });
      if (response.status === 200) {
        setIsCreating(false);
        setFormData({
          title: "",
          content: "",
          slug: "",
          image_url: "",
          excerpt: "",
        });
        fetchBlogs(); // Refresh the blog list
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to create blog");
    }
  };

  const handleEditClick = (blog: Blog) => {
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      slug: blog.slug,
      image_url: blog.image_url || "",
      excerpt: blog.excerpt || "",
    });
    setIsEditing(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentBlog) return;

    try {
      // Add authorization header for the API call
      const headers = {
        authorization: "Bearer token", // Replace with actual token or auth mechanism
      };

      const response = await axios.put(
        "/api/blogs",
        { id: currentBlog.id, ...formData },
        { headers }
      );

      if (response.status === 200) {
        setIsEditing(false);
        setCurrentBlog(null);
        setFormData({
          title: "",
          content: "",
          slug: "",
          image_url: "",
          excerpt: "",
        });
        // Immediately fetch updated blog data
        await fetchBlogs();
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to update blog");
    }
  };

  return (
    <div className="w-full flex flex-col px-4">
      <div className="container mx-auto justify-center">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Blog Management</h2>
          <Dialog open={isCreating} onOpenChange={setIsCreating}>
            <DialogTrigger asChild>
              <Button>Create New Blog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Blog Post</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={2}
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Create Blog</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  type="text"
                  id="edit-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="edit-slug">Slug</Label>
                <Input
                  type="text"
                  id="edit-slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="edit-excerpt">Excerpt</Label>
                <Textarea
                  id="edit-excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="edit-image_url">Image URL</Label>
                <Input
                  type="text"
                  id="edit-image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Update Blog</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Table>
          <TableCaption>A list of blog posts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Excerpt</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.slug}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {blog.excerpt}
                </TableCell>
                <TableCell>
                  {new Date(blog.created_at).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(blog.updated_at).toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleEditClick(blog)}
                      variant="outline"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(blog.id)}
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogSection;
