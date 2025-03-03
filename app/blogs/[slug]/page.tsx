import { notFound } from "next/navigation";
import { format } from "date-fns";
import Breadcrumb from "@/components/Breadcrumb";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  created_at: string;
  updated_at: string;
  slug: string;
  image_url?: string;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `https://www.afroasianeducation.com/api/blogs?slug=${slug}`,
      { 
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const post = await response.json();
    return post || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <div
        className="lg:h-[35vh] bg-[url('/about-breadcumb.jpg')] bg-center bg-cover bg-no-repeat h-[20vh] relative flex flex-col space-x-4 w-full items-center mx-auto justify-center overflow-hidden 
        before:absolute before:inset-0 before:bg-black before:opacity-60 before:backdrop-blur-sm"
      >
        {/* SVG Background */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <path
            fill="#e86034"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
          <path
            fill="#ff7f50"
            fillOpacity="0.2"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Breadcrumb title={post.title} className="text-white" />
        </div>
      </div>

      <article className="max-w-6xl w-full mx-auto px-4 pb-20">
        <header className="mb-8">
          <h1 
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <span>Published on {format(new Date(post.created_at), "MMMM dd, yyyy")}</span>
          </div>
        </header>

        {post.image_url && (
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image_url}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
