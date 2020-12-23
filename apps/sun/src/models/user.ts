import mongoose from 'mongoose';

type UserType = {
  name: string;
  password: string;
  token: string;
};

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  token: String
}, {
  versionKey: false,
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export { UserType, User };
