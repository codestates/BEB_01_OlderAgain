import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRouter from './routes';
const { PORT } = process.env;
const app = express();
const port = PORT || 8000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('aaa');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
