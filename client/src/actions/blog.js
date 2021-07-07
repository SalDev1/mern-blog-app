import * as api from "../api/index";

export const fetchBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogs();

    dispatch({ type: "FETCH_BLOGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = (blogData) => async (dispatch) => {
  try {
    const { data } = await api.createBlog(blogData);
    console.log(data);

    dispatch({ type: "CREATE_BLOG", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.deleteBlog(id);

    dispatch({ type: "DELETE_BLOG", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = (id, blogData) => async (dispatch) => {
  try {
    const { data } = await api.updateBlog(id, blogData);

    dispatch({ type: "UPDATE_BLOG", payload: data });
  } catch (error) {
    console.log(error);
  }
};
