const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    email: String
    savedKernels: [Kernel]

  }

  type Kernel {
    _id: ID!
    submissionDate: String
    proud: String
    excite: String
    intention: String
    dayRating: Int
    habits: [String]
  }

  input kernelInput {
    proud: String
    excite: String
    intention: String
    dayRating: Int
    habits: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  } 
  
  type Mutation {
    addUser(firstName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addKernel(input: kernelInput!): User
  }
`;

module.exports = typeDefs;
