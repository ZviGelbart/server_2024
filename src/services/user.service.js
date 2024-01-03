const userController = require("../dal/user.controller.js");
const { FilterBy } = require("../helper.js");

async function getAllUsers() {
  return await userController.read();
}

async function getUser(param, filterBy) {
  let filter = {};
  if (filterBy == FilterBy.Id) filter._id = param;
  if (filterBy == FilterBy.Email) filter.email = param;
  if (!filterBy) filter = param;
  let user = await userController.readOne(filter);
  if (!user) throw "user is not exist";
  return user;
}

// async function getUserBiId(id) {
//   const user = await controller.read(id);
//   return user;
// }

async function getUserBiName(text) {
  const user = await dal.searchUser(text);
  return user;
}

async function deleteUser(id) {
  const user = await dal.deleteUser(id);
  return user;
}

async function addNewUser(data) {
  // exist by email
  const userExist = await userController.readOne({ email: data.email });
  if (userExist) throw "User is exist";

  // validation
  let errorList = await validation(data);
  if (errorList.length) throw errorList;

  //map to model >> user (object)
  let user = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    rule: "user",
    license: data.license,
    createdDate: new Date(),
  };
  let newUser = await userController.create(user);
  return newUser;
}

async function validation(data) {
  let errors = [];
  if (!data.firstName) errors.push("firstName is not exist");
  if (!data.lastName) errors.push("latstName is not exist");
  if (!data.email) errors.push("email is not exist");
  return errors;
}

async function updateUser(userId, data) {
 
  // userId exists
  const userExist = await userController.readOne({ _id: userId })
  if (!userExist) throw "User is not exist"

  // map to my object by model
  let userToUpdate = {
      firstName: data.firstName,
      lastName: data.lastName,
  }
  if(data.license){
      userToUpdate.license=[...userExist.license, ...data.license]
  }

  await userController.update({ _id: userId },userToUpdate)
  return await userController.readOne({ _id: userId })
}


module.exports = {
  getAllUsers,
  getUser,
  addNewUser,
  updateUser,
};

// const data = require('../user.data')

// function getAllUsers(){
//     return data;
// }

// function getUserBiId(id){
//     let user =   data.find(u => u.id == id)
//     if(!user) throw "user is not axist"
//     return user

// }

// function getUserBiName(name){
// return data.filter(d=> d.firstName.includes(name)|| d.lastName.includes(name))
// }

// module.exports = {getAllUsers, getUserBiId, getUserBiName}
