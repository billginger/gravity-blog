import { Request, Response } from 'express';

const routes = (req: Request, res: Response) => {
  const url = req.path;
  res.send('Hello Gravity Blog!');
};

export default routes;
