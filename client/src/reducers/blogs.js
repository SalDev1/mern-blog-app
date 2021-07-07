export default (blogs = [], action) => {
  switch (action.type) {
    case "FETCH_BLOGS":
      return action.payload;
    case "CREATE_BLOG":
      return [...blogs, action.payload];
    case "UPDATE_BLOG":
      return blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    case "DELETE_BLOG":
      return blogs.filter((blog) => blog.id !== action.payload);
    default:
      return blogs;
  }
};
