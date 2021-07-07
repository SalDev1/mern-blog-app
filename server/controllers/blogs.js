import mongoose from "mongoose";
import Blogs from "../model/blogs.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = async (req, res) => {
  const blog = req.body;

  const newBlog = new Blogs({
    ...blog,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error.message);

    res.status(409).json(newBlog);
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const blog = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`No blog with the ${id}`);
  }

  await Blogs.findByIdAndUpdate(id, { ...blog, id }, { new: true });
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`No blog with the ${id}`);
  }

  await Blogs.findByIdAndRemove(id);

  res.json({ message: "Your post has been successfully been deleted." });
};
