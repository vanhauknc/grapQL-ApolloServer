const resolvers = {
  //Query
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoDataMethod.getAllBooks();
    },
    book: async (parent, { id }, { mongoDataMethod }) =>
      await mongoDataMethod.searchBookById(id),
    authors: async (parent, args, context) => {
      return await context.mongoDataMethod.getAllAuthor();
    },
    author: async (parent, { id }, { mongoDataMethod }) =>
      await mongoDataMethod.searchAuthorById(id),
  },
  Book: {
    author: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.searchAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.searchBookByAuthor(parent.id),
  },

  //Muatation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethod }) =>
      await mongoDataMethod.createBook(args),
  },
};
module.exports = resolvers;
