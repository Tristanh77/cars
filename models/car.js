const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
      content: String,
      rating: { type: Number, min: 1, max: 5, default: 5 },
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
    reviews: [reviewSchema]
})




module.exports = mongoose.model("Car", carSchema);