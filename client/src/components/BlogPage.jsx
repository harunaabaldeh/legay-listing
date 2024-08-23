// src/components/BlogPage.js

import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Latest Trends in Web Development",
    author: "John Doe",
    date: "August 21, 2024",
    excerpt:
      "Stay ahead of the curve by learning about the latest trends in web development. From frameworks to best practices, we cover it all in this comprehensive guide.",
    imageUrl: "https://source.unsplash.com/1600x900/?code,web",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    author: "Jane Smith",
    date: "August 18, 2024",
    excerpt:
      "JavaScript closures can be a tricky concept to grasp. This article breaks down closures in simple terms, with examples to help you understand how they work.",
    imageUrl: "https://source.unsplash.com/1600x900/?javascript,code",
  },
  {
    id: 3,
    title: "Why Responsive Design Matters",
    author: "Alice Brown",
    date: "August 15, 2024",
    excerpt:
      "Responsive design is crucial in today’s multi-device world. Learn why it’s important and how to implement it effectively in your projects.",
    imageUrl: "https://source.unsplash.com/1600x900/?responsive,design",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?blog,writing')`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Our Blog
          </h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
