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
      const user = await User.findOne({ name: args.name });
      if (!user) {
        throw new ValidationError('No such user found!');
      }
      const setting = await Setting.findOne({});
      if (!setting) {
        throw new Error('Setting data lost!');
      }
      const password = encryptPwd(args.password, setting.secret);
      const valid = user.password == password;
      if (!valid) {
        throw new ValidationError('Invalid password!');
      }
      const token = 'asdfghjkl';
      return {
        token,
        user,
      }
    }
  }
};

export default resolvers;
