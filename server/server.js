// const express = require('express');
// const path = require('path');
// const { ApolloServer } = require('apollo-server-express');
// const db = require('./config/connection');
// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware
//   });

//   await server.start();

//   server.applyMiddleware({ app });

//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// startServer();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`🌍 API server running on port ${PORT}!`);
//   });
// });