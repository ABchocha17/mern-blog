import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from "./routes/user.routes.js"

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGOOSE)
    .then(() => { console.log('mongoDB is connectd') })

app.use("/api/user", userroutes)

const server = app.listen(5000, () => {
    console.log(`server start at port ${server.address().port}`)
})

