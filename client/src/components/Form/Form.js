import React, { useEffect, useState } from "react";
import {
  Container,
  HeadTitle,
  FormPage,
  Input,
  TextArea,
  ImagePicker,
  Buttons,
  SubmitButton,
  ClearButton,
} from "./styles";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, updateBlog } from "../../actions/blog";
import { useHistory } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const blog = useSelector((state) =>
    currentId ? state.blogs.find((b) => b._id === currentId) : null
  );

  const dispatch = useDispatch();
  const history = useHistory();
  console.log(currentId);

  const [blogData, setBlogData] = useState({
    title: "",
    selectedFile: "",
    bodyText: "",
    tags: "",
  });

  console.log(blogData);

  useEffect(() => {
    if (blog) {
      setBlogData(blog);
    }
  }, [blog]);

  const clear = (e) => {
    setCurrentId(null);
    setBlogData({
      title: "",
      image: "",
      bodyText: "",
      tags: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updateBlog({ ...blogData, name: user?.result?.name }, currentId)
      );
    } else {
      dispatch(createBlog({ ...blogData, name: user?.result?.name }));
    }
    history.push("/");
  };

  return (
    <Container>
      <HeadTitle>
        Create a New <span>Blog</span>
      </HeadTitle>
      <FormPage onSubmit={handleSubmit}>
        <Input
          value={blogData.title}
          name="text"
          type="text"
          aria-label="title"
          placeholder="Title of the Blog"
          required
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
        <Input
          value={blogData.tags}
          name="tags"
          type="text"
          aria-label="title"
          placeholder="Tags"
          required
          onChange={(e) =>
            setBlogData({ ...blogData, tags: e.target.value.split(",") })
          }
        />
        <TextArea
          value={blogData.bodyText}
          rows={5}
          cols={60}
          placeholder="Body Text"
          name="bodyText"
          required
          onChange={(e) =>
            setBlogData({ ...blogData, bodyText: e.target.value })
          }
        />
        <ImagePicker>
          <FileBase64
            type="file"
            onDone={(base64) =>
              setBlogData({ ...blogData, selectedFile: base64.base64 })
            }
          />
        </ImagePicker>
        <Buttons>
          <SubmitButton type="submit">Submit</SubmitButton>
          <ClearButton onClick={clear}>Clear</ClearButton>
        </Buttons>
      </FormPage>
    </Container>
  );
};

export default Form;
