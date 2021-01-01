import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    name: String
  }
  type LoginResponse {
    name: String
    token: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    login(name: String!, password: String!): LoginResponse
  }
`;

export default typeDefs;
