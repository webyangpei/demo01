import express, { Request, Response, NextFunction } from 'express';
import User from "../schemas/user";
import { userInfo }  from 'user';

const router = express.Router();

// 获取用户列表
router.get('/list', (req:Request, res: Response, next: NextFunction) => {
    const query: { username: string } = {
       username: ''
    }
    query.username = <string>req.query.username;
    User.find(query).then(data => {
        return res.json(data);
    })
});

// 添加用户 post
router.post('/add', (req:Request, res: Response, next: NextFunction) => {
    let user:userInfo = {
        username: 'yangpei',
        age: 18,
        password: '123456',
        status: 1
    };
    user.username = req.body.username;
    user.age = req.body.age;
    user.status = req.body.status;
    new User(user).save().then((data: any) => {
        return res.json({
            code: 1,
            msg: '添加用户成功',
            data
        })
    });
    return res.json({
        code: 2,
        msg: '添加失败',
    })
});
// 删除用户 delete

router.delete('/delete/:id', (req:Request, res: Response, next: NextFunction) => {
  User.findOneAndDelete({ _id: req.query.id }).then(data => {
      if(data) {
          return res.json({
              code: 1,
              msg: '删除用户成功'
          })
      };
  });
});

export default router;
