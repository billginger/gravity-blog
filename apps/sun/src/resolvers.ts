import { UserType } from './models/user';

const users = [
  {
    name: 'Bill',
    password: '123456'
  }, {
    name: 'Ruby',
    password: '654321'
  }
];

const resolvers = {
  Query: {
    users: () => users
  },
  Mutation: {
    login: async (_: null, args: UserType) => {
      const user = users.find(value => value.name == args.name);
      if (!user) {
        throw new Error('No such user found');
      }
      const valid = user.password == args.password;
      if (!valid) {
        throw new Error('Invalid password');
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
