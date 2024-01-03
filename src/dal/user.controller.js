const userModel = require('./user.model')

async function create(data){
  return  userModel.create(data)
}

async function read(filter){
    return  userModel.find({...filter ,isActive: true})
  }

async function readOne(filter){
  return userModel.findOne({...filter, isActive: true})
}

  async function update(filter, data){
    return  userModel.updateOne(filter ,data)
  }

  async function del(filter){
    return update(filter,{isActive: false})
  }





// *****create*****

// const go =async  ()=> {
//     let tit = {title: "C", issueDate: new Date()}
//     let user ={
//         firstName: "zvi",
//         lastName: "rasd",
//         email: "rfgjfy@gmail.com",
//         license:[tit]

//         }
//     const res=  await create(user)
//     console.log(res)
// }

//******read*****

//   bi firstName or lastName

// const go =async  ()=> {
//     const res =await read({$or:[{firstName:"Olivia"},{lastName:"Garcia"}]})
//     console.log(res)
// }

/// gmail/////

//const go = async () => {
//     const  res =await read({ email:{ $regex: "@gmail"} })
//     console.log(res);
// } 

///by date////

// const go = async () => {
//     let startDate =  "2022-07-01"
//     let endDate  =   "2022-08-10"
//     const  res =await read({ createdDate:{
//         $gte: startDate,
//         $lte: endDate,
//       }
//      })
//     console.log(res);
// }

/// title a////

// const go = async () => {
//     const  res =await read({
//         'license': {
//           $elemMatch: {
//             title: { $eq: 'A' }
//           }
//         }
//       })
//     console.log(res);
// } 

// not license//

// const go = async () => {
//     const  res =await read({
//         'license': {
//           $exists: false
//         }
//       })
//     console.log(res);
// } 

//*********update***********

// const go =async  ()=> {
//     let _id = "6592872a245095717642e96f"
//     const res =await update({_id:_id },{lastName: "chene"})
//     console.log(res)
// }

// *********delete************

// const go =async  ()=> {
//     let _id = "6592872a245095717642e96f"
//     const res =await del({_id:_id })
//     console.log(res)
// }



module.exports = {create, read, readOne,update, del}
// go()


