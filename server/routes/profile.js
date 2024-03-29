
const express = require("express")
const router = express.Router()

const {
    updateProfile ,
    updateDrivingCard,
    updatePasspotPic,
    deleteAccount,
    getAllUserDetails,
    updateDisplayPicture,
    updateScore,
    generateLincence
} = require("../controllers/Profile");

const { auth } = require("../middleware/auth")





router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.put("/updatePassportPic", auth, updatePasspotPic)
router.put("/updateDrivingCard", auth, updateDrivingCard)

router.get("/getUserDetails", auth, getAllUserDetails)
router.post("/updateDisplayPicture", auth, updateDisplayPicture)
router.put("/updateScore", auth, updateScore)
router.put("/generateLincence", auth, generateLincence)





module.exports = router
