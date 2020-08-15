import express from 'express';
import * as userService from '../services/users';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const users = await userService.getAll();
  res.json({ body: users });
});

module.exports = router;