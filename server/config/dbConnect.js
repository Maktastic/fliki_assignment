import mongoose from "mongoose";

export default function connectDatabase() {
    // MongoDB connection
    return mongoose.connect('mongodb://mongodb:27017/fliki')
        .then(() => console.log('MongoDB connected'))
        .catch(err => process.exit(1))
}