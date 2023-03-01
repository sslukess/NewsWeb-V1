// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const CONTENTFUL_ENDPOINT = process.env.CONTENTFUL_ENDPOINT

const client = new ApolloClient({
    uri: CONTENTFUL_ENDPOINT,
    cache: new InMemoryCache(),
});

export default client;