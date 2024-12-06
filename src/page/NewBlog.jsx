import React from "react";
import BlogForm from "../components/BlogForm";
import { useBlogContext } from "../context/BlogProvider";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { addBlog } = useBlogContext();
  const navigate = useNavigate();

  const handleAdd = (newBlog) => {
     addBlog(newBlog);
     alert("blog başarıyle yüklendi")
     navigate("/dashboard/blog")
  };

  return (
    <div className="max-w-lg mx-auto mt-10 font-blogFont">
      <h2 className="text-2xl font-bold  text-center mb-4 m-5">Add a New Blog</h2>
      <BlogForm onSubmit={handleAdd} />
    </div>
  );
};

export default NewBlog;
