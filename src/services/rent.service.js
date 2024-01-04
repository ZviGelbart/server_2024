const  rentController = require('../dal/rent.controller.js')
const carService = require("../services/car.service.js");
const userService = require("../services/user.service.js");

async function getCar(param) {
    let rent  = await rentController.readOne(param)
    if(!rent) throw "rent is not exist"
    return rent
}
async function createRent(data){
    let car = await carService.getCar( { _id: data.carId } )
    let user = await userService.getUser({ _id: data.userId })
    let rent ={
        carId: car._id,
        userId: user._id,
        rentDate:new Date(data.rentDate),
        returnDate: new Date(data.returnDate)
    }
    let newRent =await rentController.create(rent)
    return newRent
}

module.exports = {
    getCar,
    createRent,
}