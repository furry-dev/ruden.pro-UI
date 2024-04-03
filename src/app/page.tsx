import RecommendedManga from "@/components/Presentation/RecommendedManga/RecommendedManga"
import CardList from "@/components/Presentation/CardList/CardList"
import MangaCard from "@/components/Presentation/CardList/MangaCard"
import React, { ReactElement } from 'react'
import createApolloClient from '@/apollo/apollo-client'
import { Manga } from '@/components/Presentation/CardList/MangaCard'
import { gql } from '@/__generated__';

/**
 * Fetches manga data from the server.
 * @returns {Promise<Manga[]>} The manga data fetched from the server.
 */
async function getMangaList(): Promise<Manga[]> {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql(/* GraphQL */`
            query GetRecommendedMangas($langId: [Int]) {
                mangaList(langId: $langId) {
                    id
                    age_rating
                    cover {
                        file
                    }
                }
            }
        `)
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
                    <MangaCard key={manga.id} manga={manga}/>
                ))}
            </CardList>
        </main>
    )
}
