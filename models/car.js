const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    year: {
        Number
    },
    make: {
        type: String, 
    },
    model: {
        String
    },
    price: {
        Number
    }
})




module.exports = mongoose.model("Car", carSchema);