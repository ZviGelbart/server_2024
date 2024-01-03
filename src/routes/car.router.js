const express = require("express");
const carRouter = express.Router();
const carService = require('../services/car.service');
const { FilterBy } = require("../helper.js");



carRouter.get('/', async (req, res) => {
        let data = await carService.getAllCar()
        res.send(data)
})

carRouter.get('/:carId', async (req, res) => {
    try {
        let data = await carService.getCar(req.params.carId ,FilterBy.Id)
        res.send(data)
    }catch(err){
        console.log("error:\n", err);
        res.status(400).send(err);
    }
    
})

carRouter.post('/', async (req, res) => {
    try {
        const newCar = await userService.addNewCar(req.body);
        res.send(newCar);
      } catch (err) {
        res.status(400).send(err);
      }
    });

module.exports = carRouter