import express from 'express';
import path from 'path';
import config from './config';

const app = express();

// Static files path
const staticPath = path.join(__dirname, '../static');

// View files path
const viewPath = path.join(__dirname, '../views');

// View engine setup
app.set('views', viewPath);
app.set('view engine', 'ejs');

app.use(express.static(staticPath));

app.get('/', (req, res) => res.send('Hello Gravity Blog!'));

const listenLog = `App is running at http://localhost:${config.port}`;
app.listen(config.port, () => console.log(listenLog));
