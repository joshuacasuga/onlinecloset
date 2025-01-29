import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    photoID:{
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    uploadDate:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: false
    }
}, { timestamps: true });

const Photo = mongoose.model('Photo', photoSchema);

export default Photo