import mongoose from 'mongoose';

const { Schema } = mongoose

export interface User extends mongoose.Document {
    fullName: string,
    age: string,
}

export const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
})