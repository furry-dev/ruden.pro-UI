import RecommendedManga from "@/components/Presentation/RecommendedManga/RecommendedManga"
import CardList from "@/components/Presentation/CardList/CardList"
import MangaCard from "@/components/Presentation/CardList/MangaCard"
import React, { ReactElement } from 'react'
import createApolloClient from '@/apollo/apollo-client'
import { gql } from '@apollo/client'
import { Manga } from '@/components/Presentation/CardList/MangaCard'

/**
 * Fetches manga data from the server.
 * @returns {Promise<Manga[]>} The manga data fetched from the server.
 */
async function getMangaList(): Promise<Manga[]> {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql`
            query Query($langId: [Int]) {
                mangaList(langId: $langId) {
                    id
                    age_rating
                    cover {
                        file
                    }
                }
            }
        `
    })

    return data.mangaList as Manga[]
}

/**
 * Home page component.
 * @returns {Promise<ReactElement>} The home page ReactElement.
 */
export default async function Home(): Promise<ReactElement> {
    const mangas = await getMangaList()

    return (
        <main>
            <RecommendedManga/>
            <CardList title={"Новинки: "}>
                {mangas.map((manga) => (
                    <MangaCard manga={manga}/>
                ))}
            </CardList>
        </main>
    )
}
