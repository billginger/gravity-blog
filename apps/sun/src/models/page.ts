import mongoose from 'mongoose';

type PageType = {
  url: string;
  title: string;
  content: string;
};

const pageSchema = new mongoose.Schema({
  url: String,
  title: String,
  content: String
});

const Page = mongoose.model('Page', pageSchema);

export { PageType, Page };
