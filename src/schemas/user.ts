import mongoose from 'mongoose';
const schema = mongoose.Schema;

const UserSchema = new schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 18
    },
    status: Number
});

export default UserSchema;