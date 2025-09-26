'use client'

import SampleBlogs from "@/config/sampleblogs"
import { slugify } from "@/lib/slugify";
import Image from "next/image"
import { useRouter, useParams } from "next/navigation"

interface BlogType {
  slug: string;
  title: string;
  description: string;
  category: string[];
  imageUrl: string;
  author: string;
  date: string;
}

const BlogList = () => {
  const router = useRouter()
  const params = useParams()
  const selectedCategory = params?.category as string | undefined

  const categories = Array.from(
    new Set(SampleBlogs.flatMap((blog) => blog.category))
  )

  const filteredBlogs = selectedCategory
  ? SampleBlogs.filter((blog) =>
      blog.category.some(
        (cat) => slugify(cat) === slugify(selectedCategory)
      )
    )
  : SampleBlogs;


  const handleCategoryChange = (category: string | null) => {
    if (!category) {
      router.push("/blog")
    } else {
        router.push(`/blog/${slugify(category)}`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pt-[6em]">
      <h2 className="text-3xl font-bold text-center mb-8">Our Blogs</h2>

      <div className="md:hidden mb-6">
        <select
          value={selectedCategory ?? ""}
          onChange={(e) => handleCategoryChange(e.target.value || null)}
          className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:flex md:flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-6 py-2 rounded-[5em] font-semibold transition-all duration-300 hover:scale-105 ${
            !selectedCategory ? "bg-gray-200 text-primary": "bg-primary text-white hover:bg-primary/80"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-[5em] font-semibold transition-all duration-300 hover:scale-105 ${
              slugify(category) === selectedCategory ? "bg-gray-200 text-primary" : "bg-primary text-white hover:bg-primary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog: BlogType, index: number) => (
          <a key={index} href={`/blogpost/${blog.slug}`} className="w-full">
            <div className="shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 bg-neutral-900 text-white flex flex-col h-full">
              <Image src={blog.imageUrl} alt={blog.title} className="w-full h-40 md:h-48 object-cover" width={1000} height={1000} />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm mb-3 flex-grow">{blog.description}</p>
                <div className="flex justify-between text-xs mt-auto text-gray-300">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
