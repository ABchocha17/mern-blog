import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGOOSE)
    .then(() => { console.log('mongoDB is connectd') })

const server = app.listen(5000, () => {
    console.log(`server start at port ${server.address().port}`)
}) 