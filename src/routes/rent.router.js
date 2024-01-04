const express = require("express");
const rentRouter = express.Router();
const rentService = require("../services/rent.service.js");
const carService = require("../services/car.service.js");
const userService = require("../services/user.service.js");


rentRouter.post("/", async (req, res) => {
  try {
   
    let data =await rentService.createRent(req.body)
    res.send(data)
  } catch (err) {
    console.log("error: \n", err);
    res.status(400).send(err);
  }
});

module.exports = rentRouter