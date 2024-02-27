import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";


const test = async (req, resp) => {
    resp.json({ messge: "API is working" })
}


const updateUser = async (req, resp, next) => {
    console.log(req.body.username.length);
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403,"You are not allowed to update this user"));
    }
    if(req.body.password){
        if(req.body.password.length < 5){
            return next(errorHandler(403,"password must be at least 6 characters"));
        }
        req.body.password = bcryptjs.hashSync(req.body.password,10);
    }
    if(req.body.username){
        if(req.body.username.length < 4 || req.body.username.length > 20){
            return next(errorHandler(400,"user name must be between 4 and 20 characters"));
        }
        if(req.body.username.includes(' ')){
            return next(errorHandler(400,"user name cannot contain spaces"));
        }
        if(req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400,"user name must be lowercase"));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400,"user name can only contain letters and numbers"));
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.userId,{
                $set:{
                    username: req.body.username,
                    email: req.body.email,
                    profileimg:req.body.profileimg,
                    password : req.body.password
                },
            },{new:true});
            const {password,...rest}= updateUser._doc;
            resp.status(200).json(rest);
        } catch (error) {
            next(error);
        }
    }
}


export { test,updateUser }