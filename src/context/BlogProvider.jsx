import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'


const BlogContext=createContext()

//costom hook ile çağırma 
export const useBlogContext=()=>{
    return useContext(BlogContext)
}

const BlogProvider = ({children}) => {
    const [blogs,setBlogs]=useState([])


  const getData=async()=>{
    try {
     const {data}= await axios(`https://dummyjson.com/posts`)
     console.log({data});
     setBlogs(data.posts)
    } catch (error) {
      console.log(error);
      
    }

  }

  const updateBlog = async (id, updatedBlog) => {
    try {
      const { data } = await axios.put(`https://dummyjson.com/posts/${id}`, updatedBlog);
      setBlogs((prev) =>
        prev.map((blog) => (blog.id === id ? { ...blog, ...data } : blog))
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/posts/${id}`);
      setBlogs((item) => item.filter((blog) => blog.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addBlog = async (newBlog) => {
    try {
      const { data } = await axios.post(`https://dummyjson.com/posts`, newBlog);
      setBlogs((prev) => [data, ...prev]); // Yeni blogu listeye ekle
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   getData()
  }, [])
  return (
    <BlogContext.Provider value={{blogs,updateBlog,deleteBlog,addBlog}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider