import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogsRoutes from "./routes/blogs.js";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blogs", blogsRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API.");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected");
});

mongoose.set("useFindAndModify", false);
