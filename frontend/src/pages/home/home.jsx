import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import CtmShip from "../../components/chip/chip";
import BlogList from "../../components/blogList/blogList";
import BlogCard from "../../components/blogCard/blogCard";
import { blog_data } from "../../assets/icons/assets";

const Home = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <Navbar />
      <CtmShip text="New : AI Integrated" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black/65 font-semibold">
        Your own <span className="text-primary">blogging</span> platform.
      </h1>

      <p className="my-6 sm:my-8 max-w-2xl mx-auto text-xs sm:text-sm text-gray-500 text-center">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </p>

      <form
        className="flex justify-between items-center max-w-lg mx-auto 
                   border border-gray-300 bg-white rounded overflow-hidden 
                   max-sm:scale-90 px-2 transition-all"
      >
        <input
          type="text"
          placeholder="Search for blogs"
          required
          className="w-full pl-4 py-4 outline-none text-sm"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 ml-2 rounded 
                     hover:scale-105 transition-transform cursor-pointer"
        >
          Search
        </button>
      </form>

      <BlogList menu={menu} setMenu={setMenu} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => menu === "All" || blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Home;
