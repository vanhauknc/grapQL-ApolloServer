const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require('mongoose')

//Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const connectDB = async ()=>{
  try {
    await mongoose.connect('mongodb+srv://vanhauknc:emdungdi1@cluster0.seg5s.mongodb.net/Cluster0?retryWrites=true&w=majority')
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
  
}
const mongoDataMethod = require('./data/db')
connectDB();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:()=>({mongoDataMethod})
});

const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:${4000}${server.graphqlPath}`);
});
