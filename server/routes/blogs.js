import express from "express";
import {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} from "../controllers/blogs.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", auth, createBlog);
router.delete("/:id", auth, deleteBlog);
router.post("/:id", auth, updateBlog);

export default router;
