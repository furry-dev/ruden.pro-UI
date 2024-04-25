import RecommendedManga from "@/components/screens/Home/RecommendedManga/RecommendedManga"
import CardList from "@/components/global/Lists/CardList/CardList"
import MangaCard from "@/components/global/Lists/CardList/Cards/MangaCard"
import React, { ReactElement } from "react"
import createApolloClient from "@/apollo/apollo-client"
import { gql } from "@/__generated__"
import styles from "./Home.module.sass"
import { MangaCardEntity } from "@/components/global/Lists/CardList/Cards/mangacard.interface"
import Header from "@/components/basic/Layouts/Header"

/**
 * Fetches manga data from the server.
*/
async function getMangaList() {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql(/* GraphQL */`
            query GetRecommendedMangas($fieldsFilterLangCodes: [String!]) {
                mangas(fieldsFilterLangCodes: $fieldsFilterLangCodes) {
                    _id
                    ageRating
                    covers {
                        lang,
                        imagePath
                    }
                }
            }
        `)
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
            <Header />
            <main className={styles.main}>
                <RecommendedManga/>
                <CardList title={"Новинки: "}>
                    {mangas.map((manga) => (
                        <MangaCard key={manga._id} manga={manga}/>
                    ))}
                </CardList>
            </main>
        </>
    )
}
