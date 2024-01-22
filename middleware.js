// ugly code :
// const express = require("express");
// const app = express();
// app.get("/healthy-me", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (!(username === "harkirat" && password === "pass")) {
//     console.log("err1");
//     res.status(400).json({ msg: "wrong input " });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     console.log("err2");
//     res.status(400).json({ msg: "wrong input " });
//     return;
//   }
//   res.json({
//     msg: "kidney is fine",
//   });
// });

// app.listen(3000, () => {
//   console.log("I am listening ");
// });
// In this code what happens is i u have another route which also need authentication service then you have to write entire code again so its a DRY pricipal so what we will do is we right a function which when called does authentication or whatever task it is been assigned .
// optimum code:
// const express = require("express");
// const app = express();
// function userMiddleware(req, res, next) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (!(username === "harkirat" && password === "pass")) {
//     console.log("err1");
//     res.status(400).json({ msg: "wrong input " });
//     return;
//   } else {
//     next();
//   }
// }
// function kidneyMiddleware(req, res, next) {
//   const kidneyId = req.query.kidneyId;
//   if (kidneyId != 1 && kidneyId != 2) {
//     console.log("err2");
//     res.status(400).json({ msg: "wrong input " });
//     return;
//   } else {
//     next();
//   }
// }
// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//   res.send("you are fine ");
// });
// app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
//   res.send("you are fine ");
// });
// app.get("/hear-checkup", userMiddleware, (req, res) => {
//   res.send("you are fine ");
// });
// app.listen(3000, () => {
//   console.log("I am listening ");
// });
//  app.get ("path",can take range of functions(middlewares r fun only but to proceed to next function we need to pass next()) ()=>{},)
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.post("/healthy-me", (req, res) => {
//   const kidneys = req.body.kidneys;
// });

// app.listen(3000, () => {
//   console.log("I am listening ");
// });

// 13 jan, 2024 cohort 3.1

const express = require("express");
const app = express();

// install zod for input validation

app.use(express.json());

app.post("/healthy-me", (req, res) => {
  const kidneys = req.body.kidneys;
});

app.listen(3000, () => {
  console.log("I am listening ");
});
