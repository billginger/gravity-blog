import mongoose from 'mongoose';
import config from './config';
import Page from './models/page';

// Connect to MongoDB
mongoose.connect(config.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connection succeeded!'));

// Page documents
const pages = [
  {
    url: '/'
  },
  {
    url: '/about'
  }
];

// Check and insert documents
Page.countDocuments({}, (err, count) => {
  if (err) return console.error('MongoDB countDocuments error!', err);
  if (!!count) return console.log('MongoDB documents already exist!');
  Page.insertMany(pages, err => {
    if (err) return console.error('MongoDB insertMany error!', err);
    console.log('Setup successfully!');
  });
});
