// 商家运营状况指标表
import mongoose from 'mongoose';

const schema = mongoose.Schema;

// const ObjectId = schema.Types.ObjectId;

const shopSchema = new mongoose.Schema({
    name: String, // 商家名称
}, {
    versionKey: false
});

const shop = mongoose.model('shop', shopSchema, 'shops');

export default shop;

