import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import Home from "../page/Home";
import NewBlog from "../page/NewBlog";
import Blog from "../page/Blog";
import PrivateRouter from "./PrivateRouter";
import BlogDetail from "../page/BlogDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRouter />}>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/blog" element={<Blog />} />
        <Route path="/dashboard/blog/:id" element={<BlogDetail />} />
        <Route path="/dashboard/newblog" element={<NewBlog />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
