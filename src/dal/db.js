const mongoose = require('mongoose')
const URL_MONGO = process.env.URL_MONGO


const connect = () => {
   
    mongoose.connect(URL_MONGO)
    .then(res=>{
        console.log("success");
    })
    .catch(err=>{
        console.error("error", err);
        throw err
    })
    
    
}
module.exports = {connect}
