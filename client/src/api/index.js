import axios from "axios";

const API = axios.create({ baseURL: "https://mern-blog-app-87.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchBlogs = () => API.get("/blogs");
export const createBlog = (blogData) => API.post("/blogs", blogData);
export const updateBlog = (blogData, id) => API.post(`/blogs/${id}`, blogData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

export const signUp = (userData) => API.post("/users/signup", userData);
export const signIn = (userData) => API.post("/users/signin", userData);
