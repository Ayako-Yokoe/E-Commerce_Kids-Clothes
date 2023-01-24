const router = require("express").Router()
const User = require("../models/User")
const Admin = require("../models/Admin")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(401).json("Wrong Username")

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    )

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    const inputPassword = req.body.password

    inputPassword !== originalPassword && res.status(401).json("Wrong Password")

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    )

    const { password, ...others } = user._doc

    res.status(200).json({ ...others, accessToken })
  } catch (err) {
    console.log("err", err)
    res.status(500).json(err)
  }
})

// Admin Register
router.post("/adminregister", async (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  })
  try {
    const savedAdmin = await newAdmin.save()
    res.status(201).json(savedAdmin)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Admin Log in
router.post("/adminlogin", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username })
    !admin && res.status(401).json("Wrong Username")

    const hashedPassword = CryptoJS.AES.decrypt(
      admin.password,
      process.env.PASS_SECRET
    )

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    const inputPassword = req.body.password

    inputPassword !== originalPassword && res.status(401).json("Wrong Password")

    const accessToken = jwt.sign(
      {
        id: admin._id,
        isAdmin: admin.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    )

    const { password, ...others } = admin._doc
    res.status(200).json({ ...others, accessToken })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
