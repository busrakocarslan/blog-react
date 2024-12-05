import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";

const NewBlog = () => {
  const { addBlog } = useBlogContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.body) {
      addBlog(formData); 
      alert("blog başarılı şekilde eklendi")
      navigate("/dashboard/blog"); 
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-pageFont text-orange-500 font-[900] underline uppercase">
        Create New Blog
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-5 border rounded-lg w-[300px] mt-5"
      >
        <label className="flex flex-col text-gray-600">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </label>
        <label className="flex flex-col text-gray-600">
          Content:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </label>
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-lg hover:bg-orange-500"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
