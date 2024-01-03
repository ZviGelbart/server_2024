const carController = require("../dal/car.controller");
const { FilterBy } = require("../helper.js");

async function getAllCar() {
    return await  carController.read()
}

async function getCar(param, filterBy) {
  let filter = {};
  if (filterBy == FilterBy.Id) filter._id = param;
  if (filterBy == FilterBy.Email) filter.email = param;
  if (!filterBy) filter = param;
  let car = await carController.readOne(filter);
  if (!car) throw "user is not exist";
   return car
}

async function addNewCar(data) {
  // exist by modelId
  const carExist = await carController.readOne({ modelId: data.modelId });
  if (carExist) throw "car is exist";
     // validation
  let errorList = await validation(data);
  if (errorList.length) throw errorList;

   //map to model >> car (object)
   let car = {
    categoryName: data.categoryName,
    model: data.model,
    manufacture: data.manufacture,
    price: data.price,
    modelId: data.modelId,
    year: data.year,
    color: data.color,
    horsepower: data.horsepower
   }
   let newCar = await carController.create(car)
   return newCar
}
async function validation(data) {
    let errors = [];
    if (!data.categoryName) errors.push("categoryName is not exist");
    if (!data.model) errors.push("model is not exist");
    if (!data.manufacture) errors.push("manufacture is not exist");
    if (!data.price) errors.push("price is not exist");
    if (!data.modelId) errors.push("modelId is not exist");
    if (!data.year) errors.push("year is not exist");
    if (!data.color) errors.push("color is not exist");
    if (!data.horsepower) errors.push("horsepower is not exist");
    return errors;
  }
  module.exports = {
    getAllCar,
    getCar,
    addNewCar,
  }