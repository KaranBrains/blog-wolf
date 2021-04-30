// const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User.js");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  let auth = "user";

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });
    else if (email === "admin@admin.com") auth = "admin";
      
    const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ result: existingUser, token, auth });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const result = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    return res.status(200).json({ result, token, auth: "user" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
