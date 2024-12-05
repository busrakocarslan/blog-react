import React, { useEffect, useState } from 'react'
import axios from "axios"
import BlogCard from '../components/BlogCard'
import { useBlogContext } from '../context/BlogProvider'

const Blog = () => {
 

  const {blogs}=useBlogContext()
  
  return (
    <div className='flex flex-col justify-center items-center'>
    <h2 className='text-2xl font-pageFont mt-8 text-orange-500 font-[900] underline uppercase animate-pulse'>All Blogs</h2>
    <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py lg:max-w-7xl lg:px-8 flex flex-row flex-wrap gap-1'>
    {
      blogs.map((blog)=>(
      <BlogCard key={blog.id} blog={blog}/>))
    }



    
    </div>
    </div>
  )
}

export default Blog