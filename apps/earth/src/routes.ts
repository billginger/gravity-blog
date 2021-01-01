import { Request, Response } from 'express';
import { Page } from './models/page';

const routes = (req: Request, res: Response) => {
  const url = req.path;
  Page.findOne({ url }, (err, page) => {
    if (err) return console.error('MongoDB findOne error!', err);
    if (!page) return res.status(404).end();
    const { title, content } = page;
    res.render('page', { title, content });
  });
};

export default routes;
