import express from "express";
import dotenv from "dotenv";
import userroutes from "./routes/user.routes.js"
import authroutes from "./routes/auth.routes.js"
import connectDB from "./connectDB.js";
import cookeParser from "cookie-parser";

const app = express();
app.use(express.json())
dotenv.config();
app.use(cookeParser());

connectDB()

app.use("/api/user", userroutes)
app.use("/api/auth", authroutes)

const server = app.listen(5000, () => {
    console.log(`server start at port ${server.address().port}`)
})


app.use((err, req, resp, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    resp.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})