import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";

const signup = async (req, resp, next) => {
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

export { signup }