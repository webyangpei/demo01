// 商家运营状况指标表
import mongoose from 'mongoose';

const schema = mongoose.Schema;

// const ObjectId = schema.Types.ObjectId;

const normSchema = new mongoose.Schema({
    code: Number, // 指标code
    name: String, // 指标名称
}, {
    versionKey: false
});

const norm = mongoose.model('norm', normSchema, 'norms');

export default norm;

