import BlogUser from "../model/users.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exisitingUser = await BlogUser.findOne({ email });

    if (!exisitingUser) {
      res.status(404).json("No User Found");
    }

    const isPasswordCorrect = bcrypt.compare(password, exisitingUser.password);

    if (!isPasswordCorrect) {
      res.status(404).json("Invalid Credientials");
    }

    const token = jwt.sign(
      { email: exisitingUser.email, id: exisitingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(201).json({ result: exisitingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const exisitingUser = BlogUser.findOne({ email });

    if (!exisitingUser) {
      res.status(500).json({ message: "User doesn't exist" });
    }

    if (password != confirmPassword) {
      res.status(500).json({ message: "Invalid Password" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await BlogUser.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result.id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
