import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
  name: String,
  creator: String,
  title: String,
  selectedFile: String,
  tags: [String],
  bodyText: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BlogPost = mongoose.model("BlogPost", BlogSchema);

export default BlogPost;
