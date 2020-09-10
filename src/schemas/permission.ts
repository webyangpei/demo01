// 权限表
import mongoose from 'mongoose';

const PermissionSchema = new mongoose.Schema({
    // 权限名
    name: String,
    parentId: { // 上级权限的id
        type: Number,
        default: 0
    },
    location: String //权限的资源地址，用于菜单跳转页面
},{
    versionKey: false ///查询数据库时，忽略 _v 的字段返回
});

const Permission = mongoose.model('Permission', PermissionSchema, 'permissions');

export default Permission;