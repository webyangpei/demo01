// 用户角色关系表
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const ObjectId = schema.Types.ObjectId;

const UserRoleSchema = new mongoose.Schema({
    roleId: {
        type: ObjectId,
        ref: 'Role'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    }
},{
    versionKey: false
});

const UserRole = mongoose.model('UserRole', UserRoleSchema);

export default UserRole;
