import express from 'express';
import {displayHome} from '../Controllers/index';
const router = express.Router();

/* GET home page. */
router.get('/', displayHome);

export default router;
