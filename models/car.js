const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    year: {
        type: Number
    },
    make: {
        type: String, 
    },
    model: {
        type: String
    },
    price: {
        type: String
    }
})




module.exports = mongoose.model("Car", carSchema);