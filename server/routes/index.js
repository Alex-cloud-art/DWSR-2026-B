import express from 'express';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, _next) => {
  res.render('index', {
    title: 'Roberto Alexis',
  });
});

// module.exports = indexRouter;
export default indexRouter;