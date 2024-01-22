const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.6rc1z0v.mongodb.net");
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});
const user = new User({
  name: "Himani Joshi",
  email: "ahuiok@gmail.com",
  password: "1234",
});
user.save();
