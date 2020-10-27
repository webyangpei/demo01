import express, {Request, Response, NextFunction} from 'express';
import Layer from "../schemas/layer";
import {layerInfo} from 'layer'
import bodyParser from "body-parser";

enum judgment {
    '上升', '不变', '下降','大于','小于','大于等于','小于等于','等于','不等于'
}

const router = express.Router();

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 获取商家自定义分层
router.get('/list', (req: Request, res: Response, next: NextFunction) => {
    Layer.find().then((data: any) => {
        return res.json({result: 1,
            error_msg: '查询成功',
            data
        });
    })
});

// 添加自定义分层
router.post('/add', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    let body: layerInfo = <layerInfo>{};
    body.name = req.body.name;
    body.startTime = req.body.startTime;
    body.endTime = req.body.endTime;
    body.norm = req.body.norm; // 指标
    body.judgment = req.body.judgment; // 判断条件
    body.judgmentValue = req.body.judgmentValue || 0; // 判断条件的值
    new Layer(body).save().then((data: any) => {
        return res.json({
            result: 1,
            error_msg: '操作成功',
            data
        });
    });
});

export default router;