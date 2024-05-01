import Manga from "@/components/screens/Manga/Manga"
import {MangaProps} from "@/components/screens/Manga/Manga.interface"
import createApolloClient from "@/apollo/apollo-client"
import {gql} from "@/__generated__"
import {notFound} from "next/navigation"

async function getMangaData(idOrSlug: string) {
    const client = createApolloClient()
    const {data} = await client.query({
        query: gql(/*GraphQL*/`
            query ExampleQuery($idOrSlug: String!, $fieldsFilterLangCodes: [String!]) {
                manga(idOrSlug: $idOrSlug, fieldsFilterLangCodes: $fieldsFilterLangCodes) {
                    covers {
                        imagePath
                        lang
                    }
                    titles {
                        lang
                        text
                    }
                    descriptions {
                        lang
                        text
                    }
                    genres {
                        names {
                            lang
                            text
                        }
                    }
                    year
                    status
                    authors {
                        _id
                        name {
                            lang
                            text
                        }
                    }
                    artists {
                        _id
                        name {
                            lang
                            text
                        }
                    }
                    createdAt
                }
            }

        `),
        variables: {
            idOrSlug: idOrSlug,
            fieldsFilterLangCodes: ["rus", "eng", "jpn"]
        },
        context: {
            fetchOptions: {
                next: {revalidate: 3600},
            }
        }
    })

    return data.manga
}

export default async function MangaPage({params}: MangaProps) {
    try {
        const manga = await getMangaData(params.slug)
        return <Manga params={params} manga={manga}/>
    } catch (e) {
        return notFound()
    }
}