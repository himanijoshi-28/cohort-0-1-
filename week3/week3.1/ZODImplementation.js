const express = require("express");
const app = express();

const zod = require("zod");
// const schema = zod.array(zod.number()); //array of numberes
const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(5),
  //   country: zod.literal("IN"),
});

app.use(express.json());

app.get("/healthy-me", (req, res) => {
  //  // 1. const kidneys = req.body.kidneys;
  //   // 0.  const kidneys = 2;
  //   // 1.const response = schema.safeParse(kidneys);
  //   console.log(response);
  //  //1.  if (!response.success) {
  //     res.send("not valid");
  //     console.log(response);
  //   } else {
  //     res.send("valid");
  //   }
  //tring to solve error by logging every stemp
  // set content -type in header as application/json
  //   console.log("Received request body:", req.body);

  //   const kidneys = req.body.kidneys;
  //   console.log("Extracted kidneys:", kidneys);

  //   const response = schema.safeParse(kidneys);
  //   console.log("Validation response:", response);

  //   if (!response.success) {
  //     res.status(411).send("not valid");
  //   } else {
  //     res.send("valid");
  //   }

  const email = req.body.email;

  const pass = req.body.pass;
  const emailvalidated = schema.safeParse(email);
  console.log(emailvalidated);
  const passValidated = schema.safeParse(pass);
  if (!emailvalidated.success) {
    res.status(411).send("check your email");
  } else {
    res.send("valid email received ");
  }
  if (!passValidated.success) {
    res.status(411).send("password must be min of  5 characters  and  max 7");
  } else {
    res.send("Right pass format ");
  }
  // not solved error
  //   console.log("Received request body:", req.body);
  //   const email = req.body.email;
  //   console.log(email);
  //   const pass = req.body.pass;

  //   const emailValidated = schema.safeParse(email);
  //   console.log("Email Validation response:", emailValidated);
  //   const passValidated = schema.safeParse(pass);

  //   if (!emailValidated.success) {
  //     console.error("Email Validation Error:", emailValidated.error);

  //     res.status(411).send("Check your email");
  //   } else if (!passValidated.success) {
  //     res
  //       .status(411)
  //       .send("Password must be a minimum of 5 characters and a maximum of 7");
  //   } else {
  //     res.send("Valid email and right password format received");
  //   }
});

app.listen(3000, () => {
  console.log("I am listening ");
});
