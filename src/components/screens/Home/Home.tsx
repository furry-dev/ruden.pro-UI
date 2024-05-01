import RecommendedManga from "@/components/screens/Home/RecommendedManga/RecommendedManga"
import CardList from "@/components/global/Lists/CardList/CardList"
import MangaCard from "@/components/global/Lists/CardList/Cards/MangaCard"
import React, {ReactElement} from "react"
import createApolloClient from "@/apollo/apollo-client"
import {gql} from "@/__generated__"
import styles from "./Home.module.sass"
import Header from "@/components/basic/Layouts/Header"


/**
 * Fetches manga data from the server.
 */
async function getMangaList() {
    const client = createApolloClient()
    const {data} = await client.query({
        query: gql(/*GraphQL*/`
            query Query($fieldsFilterLangCodes: [String!]) {
                mangas(fieldsFilterLangCodes: $fieldsFilterLangCodes) {
                    _id
                    ageRating
                    covers {
                        lang,
                        imagePath
                    }
                    titles {
                        lang,
                        text
                    }
                    genres {
                        names {
                            lang,
                            text
                        }
                    }
                    slug
                }
            }
        `),
        variables: {
            fieldsFilterLangCodes: ["rus", "eng", "jpn"]
        },
        context: {
            fetchOptions: {
                next: {revalidate: 3600},
            }
        }
    })

    return data.mangas
}

/**
 * Home page component.
 * @returns {Promise<ReactElement>} The home component ReactElement.
 */
export default async function Home(): Promise<ReactElement> {
    const mangas = await getMangaList()

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <RecommendedManga mangas={mangas}/>
                <CardList title={"Новинки: "}>
                    {mangas.map((manga) => (
                        <MangaCard key={manga._id} manga={manga}/>
                    ))}
                </CardList>
            </main>
        </>
    )
}
