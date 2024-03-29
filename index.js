const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const favoriteRoute = require("./routes/favorite")
const path = require("path")
const nocache = require("nocache")

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successessful"))
  .catch((err) => console.log(err))

app.use(nocache())
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)
app.use("/api/favorite", favoriteRoute)

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"))
})

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running")
})
