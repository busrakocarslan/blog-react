import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useBlogContext } from "../context/BlogProvider";
import BlogForm from "../components/BlogForm";


const BlogCard = ({ blog }) => {
  const { title, body, id } = blog;
  const Navigate=useNavigate()
  const { deleteBlog, updateBlog } = useBlogContext();
  const [isEdit,setIsEdit]=useState(false)

  const handleDelete = () => {
    const confirmDelete = window.confirm("Bu blogu silmek istediğinize emin misiniz?");
    if (confirmDelete) {
      deleteBlog(id); // Blog'u silmek için çağrı
    }
  };
  
  const handleEdit=()=>{
    setIsEdit(true)
  }

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleSave = (updatedBlog) => {
    updateBlog(id, updatedBlog);
    setIsEdit(false); // Düzenleme modundan çık
  };


  return (
    <div className="min-w-[300px] max-w-[300px] h-[250px] border-2 border-primary flex flex-col justify-around pb-5">
      {isEdit ? (
        <BlogForm
          initialData={{ title, body }}
          onSubmit={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl text-gray-900">{title}</h3>
        <p className="text-gray-400 text-sm mt-1 h-[100px] line-clamp-5">
          {body}
        </p>
      </div>
      <div className="flex justify-between align-top px-5 items-center mt-auto ">
        <button
          className="buttonNewbg"
          onClick={() => Navigate(`/dashboard/blog/${id}`)}
        >
          Continued
        </button>
        <div>
        <button className="bg-orange-400 text-white hover:bg-yellow-300 duration-300 rounded-lg p-2 mx-1"  onClick={handleEdit}>
        <FaPencilAlt />        
        </button>
        <button className="bg-primary hover:bg-white hover:text-red-600 duration-300 rounded-lg p-2" onClick={handleDelete}><FaTrashAlt /></button>

        </div>
        
      </div>
      </>)}
    </div>
  );
};

export default BlogCard;
