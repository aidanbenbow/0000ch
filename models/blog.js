import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Blog', blogSchema);