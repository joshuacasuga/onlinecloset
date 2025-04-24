import mongoose from 'mongoose';
import User from "../models/user.model.js";
import cors from "cors";
import express from "express";

const app = express();

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users});
    } catch (error)  {
        console.log("Error in fetching users:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.log("Error in fetching user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createUser = async (req, res) => {
    const user = req.body; // user will send this data

    if(!user.firstName || !user.lastName || !user.email || !user.username || !user.password) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    if(User.find({email: user.email})) {
        console.log(`Email ${user.email} already registered.`);
        return res.status(501).json({ success:false, message: "Email already registered" });
    }

    if(User.find({username: user.username})) {
        console.log(`Username ${user.username} already taken.`);
        return res.status(501).json({ success:false, message: "Username already taken" });
    }

    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json({ success:true, data: newUser });
    } catch(error) {
        console.error("Error in Create user:", error.message);
        res.status(500).json({ success:false, message: "Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User Id" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, {new:true})
        res.status(200).json({ success: true, data: updatedUser });
    } catch(error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User Id" });
    }
    
    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User Deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};