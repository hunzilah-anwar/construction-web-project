import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaPencil, FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogTemplate = ({ blogs }) => {
  

  return (
    <div>
      <div className="max-w-5xl m-auto py-20 px-10 grid grid-cols-1 gap-16">
        {blogs.map((blog) => (
          <div key={blog.id} className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-100 object-cover"
            />
            <div className="flex flex-wrap items-center justify-start gap-x-20 gap-y-4 text-sm text-gray-600 border-b border-gray-200 pt-6 pb-2">
              <span className="flex items-center gap-2">
                <CiCalendar />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <FaPencil />
                {blog.name}
              </span>
              <span className="flex items-center gap-2">
                <FaRegComment />
                {blog.comments} Comments
              </span>
            </div>
            <div className="py-4">
              <h2 className="text-2xl font-bold font-saira mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-primary hover:text-secondary transition ease-in-out duration-300 font-saira font-bold text-sm underline underline-offset-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTemplate;
