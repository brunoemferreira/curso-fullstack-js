import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next) => {
  res.json({ sucesso: true });
})

export default router;