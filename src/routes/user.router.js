const express = require("express");
const userRouter = express.Router();
const userService = require("../services/user.service.js");
const { FilterBy } = require("../helper.js");

userRouter.get("/", async (req, res) => {
  let data = await userService.getAllUsers();
  res.send(data);
});

userRouter.get("/search", async (req, res) => {
  try {
    let data = await userService.getUser(req.query);
    res.send(data);
  } catch (err) {
    console.log("error:\n", err);
    res.status(400).send(err);
  }
});

userRouter.get("/:userId", async (req, res) => {
  try {
    let data = await userService.getUser(req.params.userId, FilterBy.Id);
    res.send(data);
  } catch (err) {
    console.log("error:\n", err);
    res.status(400).send(err);
  }
});

userRouter.get("/email/:email", async (req, res) => {
  let data = await userService.getUser(req.params.email, FilterBy.Email);
  res.send(data);
});

userRouter.post("/", async (req, res) => {
  try {
    const newUser = await userService.addNewUser(req.body);
    res.send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// userRouter.delete("/:id", async (req, res) => {
//   const userBiId = await userService.getUserBiId(req.params.id);
//   if (!userBiId) {
//     return;
//   }
//   const user = await userService.deleteUser(req.params.id);
//   if (user) {
//     res.end();
//   } else {
//     res.sendStatus(502);
//   }
// });

// userRouter.put("/:id", async (req, res) => {
//   const userBiId = await userService.getUserBiId(req.params.id);
//   if (!userBiId) {
//     return;
//   }
// });

module.exports = userRouter;
