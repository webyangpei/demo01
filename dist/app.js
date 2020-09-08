"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 第三方模块
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const user_1 = __importDefault(require("./api/user"));
const app = express_1.default();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use('/api/user', user_1.default);
        // 监听错误
        //     app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
        //         res.sendStatus(500);
        //     })
        // 链接mongoose
        mongoose_1.default.connect('mongodb://localhost/ts-node', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose_1.default.connection;
        db.on('open', () => {
            console.log('mongodb is connnected!');
            // 监听启动
            app.listen(config_1.default.port, () => {
                console.log(`server is start at ${config_1.default.port}`);
            });
        });
        db.on('error', () => {
            console.log('mongodb connection error');
        });
    });
}
;
start();
