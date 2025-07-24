const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT||3000;
const connectDB=require("./config/connectionDB");

connectDB();
app.use(express.json())
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`App is listening on port ${PORT}`)
});