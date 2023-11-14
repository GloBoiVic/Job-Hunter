import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
dotenv.config();

const app = express();

const port = process.env.PORT || 5100;

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.post('/', (req, res) => {
	console.log(req);

	res.json({ message: 'Data received', data: req.body });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
