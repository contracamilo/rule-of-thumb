import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import itemRouter from './resources/item/item.router';
import listRouter from './resources/list/list.router';
import { notFound, developmentErrors, productionErrors } from './utils/errorHandler';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/item', itemRouter);
app.use('/api/list', listRouter);

// if 404
app.use(notFound);

// if another error is hitted
if (app.get('env') === 'development') {
  app.use(developmentErrors);
}

// prod error handler
app.use(productionErrors);

module.exports = app;
