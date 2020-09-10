export interface layerInfo {
    name: string, // 分层名称
    startTime: Date, // 开始时间
    endTime: Date, // 结束时间
    norm: string, // 指标
    judgment: number, // 判断条件 枚举值
    judgmentValue: number // 判断条件的值
};