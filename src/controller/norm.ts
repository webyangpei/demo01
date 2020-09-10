import express, {Request, Response, NextFunction} from 'express';
import Norm from "../schemas/norm";
import bodyParser from "body-parser";

const router = express.Router();

// enum norm {
//     gwv ='累计支付金额',
//     liveTime ='电商直播时长',
//     acu = '单场直播平均观看人数（ACU)'
// }

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 获取商家指标
router.get('/list',(req: Request, res: Response, next: NextFunction) => {
    Norm.find().then((data: any) => {
        return res.json({
            result: 1,
            error_msg: '查询成功',
            data
        });
    })
});

// 添加指标 post
router.post('/add', jsonParser, (req:Request, res: Response, next: NextFunction) => {
    let norm:{ name: string, code: number } = <{ name: string, code: number }>{};
    norm.name = req.body.name;
    norm.code = Number.parseInt(req.body.code);
    new Norm(norm).save().then((data: any) => {
        return res.json({
            result: 1,
            error_msg: '添加1项指标成功',
            data
        })
    }).catch(err => {
        return res.json({
            result: 2,
            error_msg: err,
        })
    })
});

export default router;