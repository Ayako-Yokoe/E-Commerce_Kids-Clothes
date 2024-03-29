const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Admin", AdminSchema)
