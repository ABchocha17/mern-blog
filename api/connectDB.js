import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = await mongoose.connect('mongodb+srv://arvind:arvind@mern.xtmjpfc.mongodb.net/mern-blog?retryWrites=true&w=majority',{
        // const conn = await mongoose.connect('mongodb://localhost:27017/mern', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database is connected`);
        console.log(`Database is connected to host: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB; 