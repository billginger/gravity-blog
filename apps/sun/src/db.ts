import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connection succeeded!'));
