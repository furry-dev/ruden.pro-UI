"use client"

import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from "./RecommendedManga.module.sass"
import GenreList from "@/components/global/Lists/GenreList/GenreList"
import RecommendedMangaActions from "@/components/screens/Home/RecommendedManga/Actions/RecommendedMangaActions"
import createApolloClient from "@/apollo/apollo-client"
import Image from "next/image"
import AgeRatingFlag, { GraphQLAgeRating } from "@/components/global/Flags/AgeRatingFlag"
import { gql } from "@/__generated__"


interface Manga {
    id: number
    ageRating: GraphQLAgeRating
    cover: {
        file: string
    }[]
    title: {
        text: string
    }[]
}

/**
 * Fetches manga data from the server.
 * @returns {Promise<Manga[]>} The manga data fetched from the server.
 */
async function getMangaList(): Promise<Manga[]> {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql(/*GraphQL*/`
            query Query($langId: [Int]) {
                mangaList(langId: $langId) {
                    id
                    ageRating
                    cover {
                        file
                    }
                    title {
                        text
                    }
                }
            }
        `)
    })

    return data.mangaList as unknown as Manga[]
}

/**
 * Displays recommended manga.
 * @returns {ReactElement} The recommended manga ReactElement.
 */
export default function RecommendedManga(): React.ReactElement {
    const [loading, setLoading] = useState<boolean>(true)
    const [mangas, setMangas] = useState<Manga[]>([])

    useEffect(() => {
        async function fetchData() {
            const mangaList = await getMangaList()
            console.log(mangaList)
            setMangas(mangaList)
            setLoading(false)
        }

        void fetchData()
    }, [])

    const genres: string[] = ["Повседневность", "Романтика", "Школа"]

    return (
        <div className={styles.recommended}>
            {loading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={8000}
                >
                    {mangas.map((manga) => (
                        <div key={manga.id} className={styles.mangaCard}>
                            <Image
                                src={`${manga.cover[0]?.file}`}
                                alt={manga.title[0].text}
                                width={375}
                                height={535}
                                className={styles["background-image"]}
                            />
                            <AgeRatingFlag className={styles.ageRating} rating={manga.ageRating} />
                        </div>
                    ))}
                </Carousel>
            )}
            <div className={styles.bottom}>
                <GenreList className={styles.genres} genres={genres} />
                <RecommendedMangaActions />
            </div>
        </div>
    )
}
