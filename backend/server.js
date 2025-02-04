import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // Middleware: allows us to accept JSON data in req.body

app.use('/api/user', userRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});
