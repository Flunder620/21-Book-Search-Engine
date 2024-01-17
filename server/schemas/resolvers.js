// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({ _id: context.user._id });

      if (!foundUser) {
        throw new AuthenticationError("User not found");
      }

      return foundUser;
    },
  },

  Mutation: {
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      if (!user) {
        throw new AuthenticationError("Can't create user");
      }

      return { token, user };
    },
    loginUser: async (parent, args, context) => {
      const user = await User.findOne({ email: args.email });

      if (!user) {
        throw new AuthenticationError("User not found");
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong Password");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent,args,context) => {
        try{
            const updatedUser= await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: args } },
                { new: true, runValidators: true }
            )
        } catch (err) {
            throw new AuthenticationError;
        }
    },
    deleteBook: async (parent,args,context) => {
        try{
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },//or bookId: args?
                { new: true }
              );
        } catch(err) {
            throw new AuthenticationError;
        }
    }
  },
};


