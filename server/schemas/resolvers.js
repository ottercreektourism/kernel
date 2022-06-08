const { AuthenticationError } = require("apollo-server-express");
const { User, Kernel } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
      me: async (parent, args, context) => {
        console.log(context.user);
        if (context.user) {
            const userData = await User.findOne({
                _id: context.user._id
            })
                .select('-__v -password')
                .populate('savedKernels');
            return userData;
        }
        throw new AuthenticationError('You must be logged in')
    },
    // for querying single Kernel
  //   singleKernel: async (parent, args) => {
  //         const userData = await Kernel.findOne({
  //             submissionDate: args.submissionDate
  //         })
  //             // .select('-__v -password')
  //             .populate('savedKernels');
  //         return userData;
      
  // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addKernel: async (parent, { input }, context) => {
      // unsure about this one
      // console.log(context);
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedKernels: input } },
          { new: true } 
      );
      return updatedUser;
  }
  // else throw auth error
  throw new AuthenticationError('You must be logged in')
},
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user.id, args, {
    //       new: true,
    //     });
    //   }

    //   throw new AuthenticationError("You must be logged in to do that!");
    // },
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

module.exports = resolvers;
