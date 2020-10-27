import express, {Request, Response, NextFunction} from 'express';
import Shop from "../schemas/shop";

const router = express.Router();


// 获取商家名单列表
router.get('/list', (req: Request, res: Response, next: NextFunction) => {
    Shop.find().then((data: any) => {
        return res.json({
            result: 1,
            error_msg: '查询成功',
            data
        });
    });
});

export default router;