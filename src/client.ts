import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  //deployment
  uri: "https://kfeyqcx4j8.execute-api.us-east-1.amazonaws.com/",
  //local
  // uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default client;
