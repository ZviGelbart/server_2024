const rentModel = require('./rent.model')

async function readOne(filter) {
    return  rentModel.findOne(filter)
}


async function create(data) {
    return rentModel.create(data)
}

// const go =async  ()=> {
//     require("dotenv").config();
//    const db = require('./db')
//         db.connect()
        
//         let rent ={
//             userId:"659565515644537ebd852a3e",
//             carId:"659565515644537ebd852a3e",
//             rentDate: new Date(2023, 10, 1),
//             returnDate: new Date(2023, 10, 6),
//             }
//         const res=  await create(rent)
//         console.log(res)
//     }
    
// go()

module.exports = { create, readOne,}

