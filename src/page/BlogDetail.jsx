import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState({});
  const getDetailBlog = async () => {
    const { data } = await axios(`https://dummyjson.com/posts/${id}`);
    setState(data);
  };
  useEffect(() => {
    getDetailBlog();
  }, []);

  const { title, body } = state;
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl  lg:px-8 flex flex-row sm:flex-col flex-wrap gap-5 justify-between ">
      <div className="w-full lg:w-5/12 flex flex-col gap-2 justify-evenly p-4">
        <h3 className="text-5xl text-gray-900 font-blogFont m-5 font-[700]">{title}</h3>
        <p className="text-gray-400 text-xl mt-1 h-[100px] font-blogFont">
          {body}
        </p>

      </div>
        <div className="flex justify-end gap-3 m-3 ">
          <button
            onClick={() => navigate(-1)}
            className="border rounded-lg bg-orange-400 text-gray-700 font-bold p-2"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/dashboard/home")}
            className="border rounded-lg bg-gray-400 text-black font-bold p-2"
          >
            Go Home
          </button>
        </div>
    </div>
  );
};

export default BlogDetail;
