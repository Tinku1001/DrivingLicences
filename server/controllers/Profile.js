const Profile = require("../models/Profile")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")
const otpGenerator = require("otp-generator")


exports.updateProfile = async (req, res) => {
    try {
      const {
        firstName = "",
        lastName = "",
        dateOfBirth = "",
        about = "",
        contactNumber = "",
        gender = "",
       
        
      } = req.body
      const id = req.user.id
  
     
      const userDetails = await User.findById(id)
      const profile = await Profile.findById(userDetails.additionalDetails)
  
      const user = await User.findByIdAndUpdate(id, {
        firstName,
        lastName,
      })
      await user.save()
  
     
      profile.dateOfBirth = dateOfBirth
      profile.about = about
      profile.contactNumber = contactNumber
      profile.gender = gender
     
  
      
      await profile.save()
  
     
      const updatedUserDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        updatedUserDetails,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }

exports.updateDrivingCard = async (req, res) => {
    try {
      
      const id = req.user.id
      const drivingcard = req.files.drivingcard
      if(  !drivingcard){
              return res.status("404").json({ 
                  success: false ,
                  message: "All field required"
              })
          }
  
      
      const userDetails = await User.findById(id)
      const profile = await Profile.findById(userDetails.additionalDetails)
  
      
      
      const driving_image = await uploadImageToCloudinary(
          drivingcard,
          process.env.FOLDER_NAME
        )
        
  
      
      
      profile.drivingcard = ''
      profile.drivingcard = driving_image.secure_url
    
      await profile.save()
  
     
      const updatedUserDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        updatedUserDetails,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }

  exports.updatePasspotPic = async (req, res) => {
    try {
      
      const id = req.user.id
      const passport = req.files.passport
     
      if( !passport ){
              return res.status("404").json({ 
                  success: false ,
                  message: "All field required"
              })
          }
  
      
      const userDetails = await User.findById(id)
      const profile = await Profile.findById(userDetails.additionalDetails)
  
      
      const passport_image = await uploadImageToCloudinary(
          passport,
          process.env.FOLDER_NAME
        )
     
  
      
      profile.passport = ''
      profile.passport = passport_image.secure_url
   
      await profile.save()
  
    
      const updatedUserDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        updatedUserDetails,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }
  
  

exports.deleteAccount = async (req, res) => {
    try {
      const id = req.user.id
      console.log(id)
      const user = await User.findById({ _id: id })
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        })
      }
    
      await Profile.findByIdAndDelete({
        _id: new mongoose.Types.ObjectId(user.additionalDetails),
      })
      
    
      await User.findByIdAndDelete({ _id: id })
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      })
     
    } catch (error) {
      console.log(error)
      res
        .status(500)
        .json({ success: false, message: "User Cannot be deleted successfully" })
    }
  }

  exports.getAllUserDetails = async (req, res) => {
    try {
      const id = req.user.id
      const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
      console.log(userDetails)
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: userDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  
  exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  
  exports.updateScore = async (req, res) => {
    try {
      const {score }= req.body
      const userId = req.user.id
    
    
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { score: score },
        { new: true }
      ).populate("additionalDetails")
      .exec()
      res.send({
        success: true,
        message: `Score updated`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }

  exports.generateLincence = async (req, res) => {
    try {
      
      const userId = req.user.id
      var token = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        specialChars: false,
      })
    
    
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { token: token },
        { new: true }
      ).populate("additionalDetails")
      .exec()
      res.send({
        success: true,
        message: `token updated`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  