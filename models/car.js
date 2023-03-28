const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
      content: String,
      userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
      username: String,
      userAvatar: String
    },
    {
      timestamps: true,
    }
  );

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
    },
    questions: [questionSchema],
    miles: {
        type: Number
    },
    description: {
        type: String
    }

})




module.exports = mongoose.model("Car", carSchema);