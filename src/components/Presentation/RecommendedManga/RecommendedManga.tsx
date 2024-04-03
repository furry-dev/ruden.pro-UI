"use client"

import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styles from './RecommendedManga.module.sass'
import GenreList from '@/components/Presentation/GenreList/GenreList'
import RecommendedMangaActions from '@/components/Presentation/RecommendedManga/RecommendedMangaActions'
import createApolloClient from '@/apollo/apollo-client'
import Image from 'next/image'
import { gql } from '@apollo/client'
import AgeRatingFlag, { GraphQLAgeRating } from '@/components/Presentation/AgeRatingFlag'


interface Manga {
    id: number
    age_rating: GraphQLAgeRating
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
        query: gql`
            query Query($langId: [Int]) {
                mangaList(langId: $langId) {
                    id
                    age_rating
                    cover {
                        file
                    }
                    title {
                        text
                    }
                }
            }
        `
    })

    return data.mangaList as Manga[]
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
            setMangas(mangaList)
            setLoading(false)
        }

        void fetchData()
    }, [])

    const genres: string[] = ['Повседневность', 'Романтика', 'Школа']

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
                                className={styles['background-image']}
                            />
                            <AgeRatingFlag className={styles.ageRating} rating={manga.age_rating} />
                        </div>
                    ))}
                </Carousel>
            )}
            <div className={styles.bottom}>
                <div className={styles.meta}>
                    <GenreList genres={genres} />
                </div>
                <RecommendedMangaActions />
            </div>
        </div>
    )
}
