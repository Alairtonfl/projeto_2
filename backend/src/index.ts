import 'dotenv/config';
import express from 'express';
import userRoutes from '@User/Routes/UserRoutes';
import questionRoutes from '@Question/Routes/QuestionRoutes';
import 'express-async-errors';
import 'reflect-metadata';
import './Database/connect';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(cors())

app.listen(3333, () => {
  console.log('Server started in port 3333');
});

app.use(userRoutes);
app.use(questionRoutes);

