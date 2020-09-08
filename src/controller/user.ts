import express, { Request, Response, NextFunction } from 'express';
import bodyParse from 'body-parser';

const app = express();

app.use('/user/*', (req: Request, res: Response, next: NextFunction):any => {
  return res.send('it has been login!');
});

export default app;