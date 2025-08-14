import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import Fuse from "fuse.js";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

const baseURL = import.meta.env.VITE_API_BASE_URL;

function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let res = await axios.get<BlogPost[]>(`${baseURL}/viewblog`);

      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setBlogs([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const fuse = new Fuse(blogs, {
        keys: ["title", "author"],
        threshold: 0.4,
      });
      const results = fuse.search(searchTerm).map((res) => res.item);
      setFilteredBlogs(results);
      setCurrentPage(1);
    }
  }, [searchTerm, blogs]);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />

      <div className="w-11/12 md:w-5/6 mx-auto flex gap-6 pt-[80px] md:pt-[128px]">
        {/* Left: Scrollable Blogs */}
        <div className="flex-1 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pr-4">
          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or author"
              className="w-full p-2 border rounded bg-white text-black"
            />
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white">
              <div
                className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"
                role="status"
                aria-label="Loading"
              ></div>
              <p className="text-gray-600 text-lg">Loading blog content...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    onClick={() => navigate(`/blogs/${blog.slug}`)}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-1">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-800">
                        By <strong>{blog.author}</strong>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-3">No blogs found.</p>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === idx + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
