import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello Gravity Blog!'));

app.listen(3000, () => console.log('App is running at http://localhost:3000'));
