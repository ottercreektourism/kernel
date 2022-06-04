const { AuthenticationError } = require("apollo-server-express");
const { User, Habits, Kernel, KernelCollection } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addKernel: async (parent, { kernel }, context) => {
      // unsure about this one
      console.log(context);
      if (context.user) {
        const newKernel = new KernelCollection({ kernel });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { collections: newKernel },
        });

        return newKernel;
      }

      throw new AuthenticationError("You must be logged in to do that!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("You must be logged in to do that!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials!");
      }

      const isValidPassword = await user.isCorrectPassword(password);

      if (!isValidPassword) {
        throw new AuthenticationError("Invalid credentials!");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};
