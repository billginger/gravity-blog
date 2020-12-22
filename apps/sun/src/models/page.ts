import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  url: String,
  title: String,
  content: String
});

const Page = mongoose.model('Page', pageSchema);

export default Page;
