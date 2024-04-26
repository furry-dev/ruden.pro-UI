"use client"

import React, {useState} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./RecommendedManga.module.sass"
import GenreList from "@/components/global/Lists/GenreList/GenreList"
import RecommendedMangaActions from "@/components/screens/Home/RecommendedManga/Actions/RecommendedMangaActions"
import AgeRatingFlag from "@/components/global/Flags/AgeRatingFlag"
import Ambilight from "@/components/global/Ambilight/Ambilight"
import Image from "next/image"
import Flicking from "@egjs/react-flicking"

import {AutoPlay} from "@egjs/flicking-plugins"
import "@egjs/react-flicking/dist/flicking.css"
import {
    Genre,
    Manga,
    RecommendedMangaProps
} from "@/components/screens/Home/RecommendedManga/recommended-manga.interfaces"

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
 * Displays recommended manga.
 * @returns {ReactElement} The recommended manga ReactElement.
 */
export default function RecommendedManga({mangas}: RecommendedMangaProps): React.ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const mangaCovers = mangas.map(manga => manga.covers[0].imagePath)

    const carouselChangeHandler = (index: number) => {
        if (index > mangas.length - 1) return false
        setCurrentIndex(index)
    }

    // TODO: perspective plugin on PC
    const plugins = [
        new AutoPlay({
            duration: 5000,
            animationDuration: 1500
        })
    ]

    return (
        <div className={styles.recommended}>
            <Flicking
                circular={true}
                panelsPerView={1}
                plugins={plugins}
                onChanged={(e) => carouselChangeHandler(e.index)}
            >
                {mangas.map((manga) => (
                    <>
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
                    </>
                ))}
            </Flicking>
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
