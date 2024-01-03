const carModel = require('./car.model')

async function read(filter){
    return carModel.find({...filter, isActive:true})
}

async function readOne(filter){
    return carModel.findOne({...filter, isActive: true})
  }

  async function create(data){
    return  carModel.create(data)
  }


  module.exports = {read, readOne, create}