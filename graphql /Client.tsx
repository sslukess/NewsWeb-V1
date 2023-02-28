// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const CONTENTFUL_ENDPOINT = process.env.CONTENTFUL_ENDPOINT

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;