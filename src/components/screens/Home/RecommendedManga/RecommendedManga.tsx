"use client"

import React, {useEffect, useState} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import styles from "./RecommendedManga.module.sass"
import GenreList from "@/components/global/Lists/GenreList/GenreList"
import RecommendedMangaActions from "@/components/screens/Home/RecommendedManga/Actions/RecommendedMangaActions"
import createApolloClient from "@/apollo/apollo-client"
import Image from "next/image"
import AgeRatingFlag, {GraphQLAgeRating} from "@/components/global/Flags/AgeRatingFlag"
import {gql} from "@/__generated__"
import Ambilight from "@/components/global/Ambilight/Ambilight"

interface Genre {
    names: {
        lang: string
        text: string
    }[]
}

interface Manga {
    _id: string
    ageRating: GraphQLAgeRating
    covers: {
        lang: string
        imagePath: string
    }[]
    titles: {
        lang: string
        text: string
    }[]
    genres: Genre[]
}

function getGenreNames(langCode: string, genreList: Genre[]) {
    let genreNames = []
    for (let genre of genreList) {
        let found = false
        for (let name of genre.names) {
            if (name.lang === langCode) {
                genreNames.push(name.text)
                found = true
                break
            }
        }
        if (!found) {
            genreNames.push(genre.names[0].text)
        }
    }
    return genreNames
}

function getGenresFromManga(langCode: string, manga: Manga | undefined) {
    if (!manga) return []
    return getGenreNames(langCode, manga.genres).slice(0, 3)
}

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
                }
            }
        `)
    })

    return data.mangas
}

/**
 * Displays recommended manga.
 * @returns {ReactElement} The recommended manga ReactElement.
 */
export default function RecommendedManga(): React.ReactElement {
    const [loading, setLoading] = useState<boolean>(true)
    const [mangas, setMangas] = useState<Manga[]>([])
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [mangaCovers, setMangaCovers] = useState<string[]>([])

    useEffect(() => {
        async function fetchData() {
            const mangaList = await getMangaList()
            if (mangaList && mangaList.length > 0) {
                setMangas(mangaList)
                setLoading(false)

                const covers: string[] = []
                mangaList.forEach((manga) => {
                    covers.push(manga.covers[0].imagePath)
                })
                setMangaCovers(covers)
            }
        }

        void fetchData()
    }, [])

    const carouselChangeHandler = (index: number) => {
        if (index > mangas.length - 1) return false
        setCurrentIndex(index)
    }

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
                    onChange={carouselChangeHandler}
                >
                    {mangas.map((manga) => (
                        <div key={manga._id} className={styles.mangaCard}>
                            <Image
                                src={`${manga.covers[0]?.imagePath}`}
                                alt={manga.titles[0].text}
                                width={375}
                                height={535}
                                className={styles["background-image"]}
                            />
                            <AgeRatingFlag className={styles.ageRating} rating={manga.ageRating}/>
                        </div>
                    ))}
                </Carousel>
            )}
            <div className={styles.bottom}>
                <GenreList className={styles.genres} genres={getGenresFromManga("rus", mangas[currentIndex])}/>
                <RecommendedMangaActions/>
            </div>
            <Ambilight
                imagesUrls={mangaCovers}
                colors={50}
                aspectRatio={535 / 375}
                fadeDuration={800}
                currentIndex={currentIndex}
                className={styles.ambilight}
            />
        </div>
    )
}
