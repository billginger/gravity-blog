import express from 'express';
import path from 'path';
import config from './config';
import routes from './routes';
import './db';

// Create Express server
const app = express();

// Static files path
const staticPath = path.join(__dirname, '../static');

// View files path
const viewPath = path.join(__dirname, '../views');

// View engine setting
app.set('views', viewPath);
app.set('view engine', 'ejs');

// Static files setting
app.use(express.static(staticPath));

// Routes setting
app.get('*', routes);

// Start Express server
const listenLog = `App is running at http://localhost:${config.port}`;
app.listen(config.port, () => console.log(listenLog));
