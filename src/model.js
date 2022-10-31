const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    message:{
        type: String
    }
});

const message = new mongoose.model("message",schema)

module.exports = message ;