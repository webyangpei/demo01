// 第三方模块
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import config from "./config";

import userRouter from "./api/user";

const app = express();
async function start() {
    app.use('/api/user', userRouter);
    // app.use('/api/test', (req:Request, res: Response, next: NextFunction) => {
    //     // return res.send('hello world!');
    //     return res.json({
    //         code: 1,
    //         msg: '测试成功'
    //     });
    // });
    // 监听错误
    app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(res, 2323)
        res.sendStatus(500);
    })
// 链接mongoose
    mongoose.connect('mongodb://localhost/ts-node', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('open', () => {
        console.log('mongodb is connnected!');
        // 监听启动
        app.listen(config.port, () => {
            console.log(`server is start at ${ config.port }`)
        });
    });
    db.on('error', () => {
        console.log('mongodb connection error');
    });
};

start();

