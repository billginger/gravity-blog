import crypto from 'crypto';
import { ValidationError } from 'apollo-server';
import { encryptPwd } from './utils/encrypt';
import { UserType, User } from './models/user';
import { Setting } from './models/setting';

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    }
  },
  Mutation: {
    login: async (_: null, args: UserType) => {
      const name = new RegExp('^' + args.name.trim() + '$', 'i');
      const user = await User.findOne({ name });
      if (!user) {
        throw new ValidationError('No such user found!');
      }
      const setting = await Setting.findOne({});
      if (!setting) {
        throw new Error('Setting data lost!');
      }
      const password = encryptPwd(args.password, setting.secret);
      if (password != user.password) {
        throw new ValidationError('Invalid password!');
      }
      const token = crypto.randomBytes(16).toString('hex');
      user.token = token;
      await user.save();
      return {
        name: user.name,
        token,
      };
    }
  }
};

export default resolvers;
