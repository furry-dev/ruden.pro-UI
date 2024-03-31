import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

/**
 * Creates a new Apollo Client instance.
 * @returns {ApolloClient<NormalizedCacheObject>} The Apollo Client instance.
 */
export default function createApolloClient(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
        uri: "http://localhost:3005",
        cache: new InMemoryCache(),
    })
}
