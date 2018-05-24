import { Router } from 'express';

import login from '../controllers/login';

import signup from '../controllers/signup';

const router = new Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;