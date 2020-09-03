import express from 'express';
import path from 'path';

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

app.listen(3000, () => console.log('App is running at http://localhost:3000'));
