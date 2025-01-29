import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/User.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // Middleware: allows us to accept JSON data in req.body

app.post('/api/user', async (req, res) => {
    const user = req.body; // user will send this data

    if(!user.firstName || !user.lastName || !user.email || !user.phoneNum) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json({ success:true, data: newUser });
    } catch(error) {
        console.error("Error in Create user:", error.message);
        res.status(500).json({ success:false, message: "Server Error" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});
