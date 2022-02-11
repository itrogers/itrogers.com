import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import HomePage from "./components/pages/Home";
import { usePosts } from "./hooks/use-posts";

const AppRoutes = () => {
  const posts = usePosts();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {posts.map((post) => {
        const { slug, body, ...meta } = post;
        return (
          <Route
            key={slug}
            path={slug}
            element={<BlogPost content={body} {...meta} />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
