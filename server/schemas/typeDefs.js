const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    email: String
    kernelCollection: [KernelCollection]
    habits: [Habits]
  }

  type Habits {
    _id: ID
    name: String
  }

  type KernelCollection {
    _id: ID
    kernel: Kernel
  }

  type Kernel {
    _id: ID
    submissionDate: String
    proud: String
    excite: String
    intention: String
    habits: [Habits]
    dayRating: Int
  }

  input KernelInput {
    _id: ID
    submissionDate: String
    proud: String
    excite: String
    intention: String
    habits: [String]
    dayRating: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    kernelCollection(_id: ID!): [KernelCollection]
    kernel(_id: ID!): Kernel
    user: User
  }

  type Mutation {
    addUser(firstName: String!, email: String!, password: String!): Auth
    addKernel(kernel: KernelInput!): Kernel
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
