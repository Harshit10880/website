const mongoose = require("mongoose");
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/firstdb")
    .then(() => {
        console.log("Connected to the Database");
    })
    .catch((error) => {
        console.log(error);
    });
};
module.exports = connect;