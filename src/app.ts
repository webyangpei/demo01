// 第三方模块
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
// @ts-ignore
// import cors from 'cors';
const  cors = require('cors');

import config from "./config";

import user from "./controller/user";
import layer from './controller/layer'
import norm from './controller/norm'
import shop from './controller/shop'

const app = express();
async function start() {
    app.use(cors())
    app.use('/api/user', user);
    app.use('/api/layer', layer);
    app.use('/api/norm', norm);
    app.use('/api/shop', shop);
    // 监听错误
    app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
        throw (err);
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

