import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PopupForm from "../components/PopUpForm";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
  schemaMarkup?: string[]; // support array of JSON-LD strings
}

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${baseURL}/viewblog`);
        const blogList: BlogType[] = res.data;

        const found = blogList.find((b) => b.slug === slug);
        console.log(found);
        if (!found) {
          setError("Blog not found");
        } else {
          setBlog(found);

          // Set related blogs based on same category, excluding current blog
          const related = blogList
            .filter(
              (b) =>
                b.slug !== slug &&
                b.category?.toLowerCase() === found.category?.toLowerCase()
            )
            .slice(0, 4); // Limit to 4 blogs
          setRelatedBlogs(related);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching blog");
      }
      setLoading(false);
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div
          className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"
          role="status"
          aria-label="Loading"
        ></div>
        <p className="text-gray-600 text-lg">Loading blog content...</p>
      </div>
    );

  if (error)
    return <div className="pt-40 text-center text-red-600">{error}</div>;
  if (!blog) return null;

  return (
    <div className="bg-white text-black  min-h-screen">
      {/* ✅ Schema Markup */}
      {Array.isArray(blog.schemaMarkup) &&
        blog.schemaMarkup.map((markup, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ))}

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 pt-[80px] md:pt-[128px]">
        {/* Blog Content */}
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-2">
            By {blog.author} -{" "}
            {new Date(blog.datePublished).toLocaleDateString()}
          </p>

          <img
            src={blog.coverImage}
            className="mb-4 w-full rounded"
            alt={`Cover image for ${blog.title}`}
          />

          <div
            className="prose prose-md  max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="w-11/12 md:w-5/6 mx-auto my-10">
          <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedBlogs.map((relBlog) => (
              <div
                key={relBlog.slug}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(`/blogs/${relBlog.slug}`)}
              >
                <img
                  src={relBlog.coverImage}
                  alt={relBlog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {relBlog.title}
                  </h3>
                  <p className="text-sm text-gray-600 ">
                    {new Date(relBlog.datePublished).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-[var(--primary-color)] text-white text-center py-10 px-4 mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Dream Project?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s bring your vision to life with our expert team. Get in touch
          today and take the first step toward your future.
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}

      <Footer />
    </div>
  );
};

export default BlogDetails;
