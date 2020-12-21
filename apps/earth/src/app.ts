import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';

// Create Express server
const app = express();

// Connect to MongoDB
mongoose.connect(config.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connection succeeded!'));

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
