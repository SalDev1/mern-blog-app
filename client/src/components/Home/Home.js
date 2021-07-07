import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../actions/blog";
import { ContainerGrid, ProgressBar } from "./styles";
import Blog from "./Blog/Blog";
import { CircularProgress } from "@material-ui/core";

const Home = ({ setCurrentId }) => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  console.log(blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <ContainerGrid>
      {!blogs.length ? (
        <ProgressBar>
          <CircularProgress size={100} />
        </ProgressBar>
      ) : (
        <>
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} setCurrentId={setCurrentId} />
          ))}
        </>
      )}
    </ContainerGrid>
  );
};

export default Home;
