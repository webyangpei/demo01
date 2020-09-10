// 角色表
import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: String // 角色名
});

const Role = mongoose.model('Role', roleSchema, 'roles');

export default Role;