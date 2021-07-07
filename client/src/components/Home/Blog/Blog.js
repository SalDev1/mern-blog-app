import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog, fetchBlogs } from "../../../actions/blog";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardTags,
  ThumbNail,
  CardText,
  Credientials,
  CardAuthor,
  CardDate,
  Div1,
  UpdateButton,
} from "./styles";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Blog = ({ blog, setCurrentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteBlog(blog._id));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setCurrentId(blog._id);
    history.push("/createblog");
  };

  return (
    <Card>
      {user?.result?.googleId === blog.creator ||
      user?.result?._id === blog.creator ? (
        <UpdateButton onClick={updateHandler}>
          <MoreHorizIcon />
        </UpdateButton>
      ) : null}
      <ThumbNail>
        <CardImage src={blog.selectedFile} alt={blog.name} />
      </ThumbNail>
      <CardContent>
        <CardTags>
          {blog.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </CardTags>
        <CardTitle>{blog.title}</CardTitle>
        <CardText>{blog.bodyText}</CardText>
        <Credientials>
          <Div1>
            <CardAuthor>{blog.name}</CardAuthor>
            <CardDate>{moment(blog.createdAt).format("MMMM Do YYYY")}</CardDate>
          </Div1>
          <Button onClick={deleteHandler}>
            {user?.result?.googleId === blog.creator ||
            user?.result?._id === blog.creator ? (
              <DeleteIcon />
            ) : null}
          </Button>
        </Credientials>
      </CardContent>
    </Card>
  );
};

export default Blog;
