import express from 'express';
import { mapOrder } from './utilities/sorts.js';

const app = express();

const hostName = 'localhost';
const port = 8000;

app.get('/', (req, res) => {
	res.end('<h1>Hello world</h1><hr />');
});

app.listen(port, hostName, () => {
	console.log('Hello tanhun');
});
