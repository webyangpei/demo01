// 商家自定义分层
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const ObjectId = schema.Types.ObjectId;

const layerSchema = new mongoose.Schema({
    shopId: ObjectId, // 商家ID
    name: String, // 分层名称
    startTime: Date, // 开始时间
    endTime: Date, // 结束时间
    norm: String, // 指标
    judgment: Number, // 判断条件
    judgmentValue: Number // 判断条件的值

}, {
    versionKey: false
});

const layer = mongoose.model('layer', layerSchema, 'layers');

export default layer;

