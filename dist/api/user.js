"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("@/models/user"));
const router = express_1.default.Router();
// 获取用户列表
router.get('/list', (req, res, next) => {
    console.log(req, '请求数据');
    // new User(user).save().then((data: any) => {
    //     return res.json(data);
    // });
    // next();
});
// 添加用户 post
router.post('/add', (req, res, next) => {
    let user = {
        username: '',
        age: 18,
        status: 1
    };
    user.username = req.body.username;
    user.age = req.body.age;
    user.status = req.body.status;
    new user_1.default(user).save().then((data) => {
        res.json(data);
    });
    return res.json({
        code: 1,
        msg: '添加用户成功'
    });
    // next();
});
// 删除用户 delete
router.delete('/delete/:id', (req, res, next) => {
    user_1.default.findOneAndDelete({ _id: req.query.id }).then(data => {
        if (data) {
            return res.json({
                code: 1,
                msg: '删除用户成功'
            });
        }
        ;
    });
});
exports.default = router;
