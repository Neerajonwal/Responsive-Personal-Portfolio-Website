const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration",{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
console.log("connection succesfull")
}).catch((e)=>{
    console.log(e)
})