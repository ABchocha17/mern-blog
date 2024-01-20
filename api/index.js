import express from "express";
const app = express();

const server = app.listen(5000, () => {
    console.log(`server start at port ${server.address().port}`)
})