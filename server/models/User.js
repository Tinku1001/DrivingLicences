const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

   
    password: {
      type: String,
      required: true,
    },
    score:{
      type: Number,
    },

    token: {
        type: String,
    },
    image: {
      type: String,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },

  },
  { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)
