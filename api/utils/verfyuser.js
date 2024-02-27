import jwt from 'jsonwebtoken';
import {errorHandler} from './error.js';

export const verifyToken = async (req, resp,next) => {
    const token = req.cookies.token;
    if(!token){
        return next(errorHandler(401,"unauthorized1"));
    }
    jwt.verify(token,"key",(err,user)=>{
        if(err){
            return next(errorHandler(401,"unauthorized2"));
        }
        req.user = user;
        next();
    });
}