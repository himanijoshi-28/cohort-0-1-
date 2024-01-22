const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

const app = express();
app.use(express.json());
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   let userExists = false;
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username == username &&
//       ALL_USERS[i].password == password
//     ) {
//       userExists = true;
//     }
//   }
//   return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;

//   const decoded = jwt.verify(token, jwtPassword);
//   const username = decoded.username;
//   // return a list of users other than this username
//   res.json({ users: ALL_USERS });
// });

// app.listen(3000);

// practice code

// const express = require("express");
// const jwt = require("jsonwebtoken");

// const app = express();
// const jwtpass = "12345";
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];
// app.use(express.json());
// function userExists(username, password) {
//   let UserExists = false;
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username == username &&
//       ALL_USERS[i].password == password
//     ) {
//       UserExists = true;
//     }
//   }
//   return UserExists;
// }

// app.post("/signup", (req, res) => {
//   const username = req.body.username;
//   const pass = req.body.password;

//   if (!userExists(username, pass)) {
//     return res.json({ msg: "user not in mem db " });
//   }

//   var token = jwt.sign({ username }, jwtpass);
//   res.json({ token });
// });

// app.get("/users", (req, res) => {
//   var token = req.headers.authorization;
//   const verify = jwt.verify(token, jwtpass);
//   const username = verify.username;

//   res.json({ user: ALL_USERS });
// });

app.listen(3000, () => {
  console.log("listening ");
});

//write in mongodb-> basic
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://admin:admin@cluster0.vlzy9ih.mongodb.net/data");
// const User = new mongoose.model("Users", {
//   User: String,
//   email: String,
//   password: String,
// });
// const user = new User({
//   name: "himani",
//   email: "himani@gmial.com",
//   password: "1233456787654",
// });
// user.save();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.vlzy9ih.mongodb.net/data");
const User = new mongoose.model("Users", {
  User: String,
  email: String,
  password: String,
});
app.get("/save", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const Existinguser = await User.findOne({ email: email });
  if (Existinguser) {
    return res.json("user already exists ");
  }
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  user.save();
  res.json("data added ");
});
