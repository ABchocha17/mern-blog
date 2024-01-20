import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"

const signup = async (req, resp) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return resp.status(400).json({ message: "all fields are required" })
    }

    const hashedpassword = bcryptjs.hashSync(password, 10)
    const user = new User({ username, email, password: hashedpassword })

    try {
        await user.save();
        resp.json({ message: "Signup successful" })
    } catch (error) {
        return resp.status(400).json({ message: error.message })
    }
}

export { signup }