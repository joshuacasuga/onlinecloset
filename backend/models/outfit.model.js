import mongoose from 'mongoose';

const outfitSchema = new mongoose.Schema({
    outfitID:{
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
    }
}, { timestamps: true });

const Outfit = mongoose.model('Outfit', outfitSchema);

export default Outfit