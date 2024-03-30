import { ApolloClient, InMemoryCache } from "@apollo/client"

export default function createApolloClient() {
    return new ApolloClient({
        uri: "http://localhost:3005",
        cache: new InMemoryCache(),
    })
}
