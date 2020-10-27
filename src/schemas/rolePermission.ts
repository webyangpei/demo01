// 角色权限关系表
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const ObjectId = schema.Types.ObjectId;

const rolePermissionSchema = new mongoose.Schema({
    roleId: {
        type: ObjectId, //关于某个角色，可以ObjectId拿到角色的其他字段
        ref: 'Role'
    },
    permissionId: {
        type: ObjectId, //关于某个权限，可以ObjectId拿到权限的其他字段
        ref: 'Permission'
    },
});

const rolePermission = mongoose.model('rolePermission', rolePermissionSchema);

export default rolePermission;
