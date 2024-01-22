import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, resp, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, "all fields are required"));
    }

    const hashedpassword = bcryptjs.hashSync(password, 10)
    const user = new User({ username, email, password: hashedpassword })

    try {
        await user.save();
        resp.json({ message: "Signup successful" })
    } catch (error) {
        next(error)
    }
}

export const signin = async(req,resp,next)=>{
    const { email, password } = req.body;
    try {
        const isValidUser = await User.findOne({email});
        if(!isValidUser){
            return next(errorHandler(404,"user not found"))
        }
        const validPassword = bcryptjs.compareSync(password,isValidUser.password);
        if(!validPassword){
            return next(errorHandler(404,"encoorect password"))
        }
        const token = jwt.sign({id: isValidUser._id},"key");
        const {password: pass,...rest} = isValidUser._doc;
        resp.status(200).cookie("token",token,{httpOnly:true}).json({rest})
    } catch (error) {
        next(error);
    }

}