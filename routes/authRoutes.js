const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controller/authController");

//router object
const router = express.Router();

//routes
//Register
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

module.exports = router;
