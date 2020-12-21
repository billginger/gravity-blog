import { Request, Response } from 'express';
import Page from './models/page';

const routes = (req: Request, res: Response) => {
  const url = req.path;
  Page.findOne({ url }, (err, page) => {
    if (err) return res.status(404).end();
    res.send('Hello Gravity Blog!');
  });
};

export default routes;
