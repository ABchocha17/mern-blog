import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileimg: { type: String, default: "https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4696.jpg?w=740" }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export { User }