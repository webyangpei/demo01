import mongoose from 'mongoose';
import UserSchema from '../schemas/user';

const User = mongoose.model('User', UserSchema, 'users');

// User.find({}, (err, data) => {
//     console.log(err, data);
// })

export default User;