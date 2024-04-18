import RecommendedManga from "@/components/Presentation/RecommendedManga/RecommendedManga"
import CardList from "@/components/Presentation/Lists/CardList/CardList"
import MangaCard from "@/components/Presentation/Lists/CardList/Cards/MangaCard"
import React, { ReactElement } from "react"
import createApolloClient from "@/apollo/apollo-client"
import { gql } from "@/__generated__"
import styles from "./Home.module.sass"
import { MangaCardEntity } from "@/components/Presentation/Lists/CardList/Cards/mangacard.interface"
import Header from "@/components/Basic/Layouts/Header"

/**
 * Fetches manga data from the server.
 * @returns {Promise<MangaCardEntity[]>} The manga data fetched from the server.
 */
async function getMangaList(): Promise<MangaCardEntity[]> {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql(/* GraphQL */`
            query GetRecommendedMangas($langId: [Int]) {
                mangaList(langId: $langId) {
                    id
                    ageRating
                    cover {
                        file
                    }
                }
            }
        `)
    })

    return data.mangaList as unknown as MangaCardEntity[]
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
                        <MangaCard key={manga.id} manga={manga}/>
                    ))}
                </CardList>
            </main>
        </>
    )
}
