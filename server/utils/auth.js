const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const authMiddleware = async (context) => {

  const authHeader = context.req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const dummyUser = { _id: 'dummyId', email: 'dummy@example.com' };
        return { user: dummyUser };
      } catch (err) {
        throw new AuthenticationError('Invalid or expired token');
      }
    }

    throw new AuthenticationError('Authentication token must be in the format "Bearer [token]"');
  }

  throw new AuthenticationError('Authorization header must be provided');
};

module.exports = authMiddleware;
