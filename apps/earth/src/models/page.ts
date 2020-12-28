import mongoose from 'mongoose';

type PageType = mongoose.Document & {
  url: string;
  title: string;
  content: string;
};

const pageSchema = new mongoose.Schema({
  url: String,
  title: String,
  content: String
}, {
  versionKey: false,
  timestamps: true
});

const Page = mongoose.model<PageType>('Page', pageSchema);

export { PageType, Page };
