import crypto from 'crypto';
import mongoose from 'mongoose';
import config from './config';
import { encryptPwd } from './utils/encrypt';
import { Setting } from './models/setting';
import { User } from './models/user';
import { Page } from './models/page';

// Setting document
const secret = crypto.randomBytes(16).toString('hex');
const setting = {
  secret,
};

// User document
const password = encryptPwd('admin', secret);
const user = {
  name: 'admin',
  password,
};

// Page documents
const pages = [
  {
    url: '/',
    title: 'Home Page',
    content: 'Welcome to Home Page',
  },
  {
    url: '/about',
    title: 'About Page',
    content: 'Welcome to About Page',
  },
];

// Connect to MongoDB
console.log('Connecting to MongoDB...');
mongoose.connect(config.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('MongoDB connection succeeded!');
  console.log('Checking collections...');
  try {
    const countSetting = await Setting.countDocuments({});
    const countUser = await User.countDocuments({});
    const countPage = await Page.countDocuments({});
    if (!!countSetting || !!countUser || !!countPage) {
      console.warn('MongoDB collections already exist!');
      process.exit();
    }
  } catch (err) {
    console.error('MongoDB check collections error!', err);
    process.exit();
  }
  console.log('Check collections succeeded!');
  console.log('Creating collections...');
  try {
    await Setting.insertMany(setting);
    await User.insertMany(user);
    await Page.insertMany(pages);
  } catch (err) {
    console.error('MongoDB create collections error!', err);
    process.exit();
  }
  console.log('Create collections succeeded!');
  console.log('Congratulations! Setup successfully!');
  process.exit();
});
