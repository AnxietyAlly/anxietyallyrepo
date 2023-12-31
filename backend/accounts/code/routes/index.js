import express from 'express';
import cors from 'cors';
import {
  getAccounts,
  setAccounts,
} from '../controllers/accountsController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Hi, this is the accounts microservice');
});
// router.get('/example', checkName, responseExample);
// router.post('/example', checkName, updateExample);

router.options('/accounts', (req, res, next) => {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// get a collection of all the accounts, you can also use a query
router.get('/accounts', cors(), getAccounts);
router.post('/accounts', cors(), setAccounts);

export default router;
