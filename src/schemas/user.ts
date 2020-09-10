// 用户表
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 18
    },
    password: {
      type: String,
      required: true
    },
    status: Number
},{
    versionKey: false
});

const User = mongoose.model('User', UserSchema, 'users');

export default User;