"use client"

import styles from "./MangaData.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import MangaDataGenres from "@/components/screens/Manga/MangaData/Genres/MangaDataGenres"
import MangaMetaData from "@/components/screens/Manga/MangaData/Meta/MangaMetaData"
import {useEffect, useRef, useState} from "react"
import {useQueryState} from "nuqs"
import {MangaDataProps} from "@/components/screens/Manga/MangaData/manga-data.interfaces"
import SwipeableViews from "react-swipeable-views"
import ChapterList from "@/components/global/Lists/ChapterList/ChapterList"
import CharactersList from "@/components/screens/Manga/MangaData/CharactersList/CharactersList"

const INDEX2SECTION = [
    "data",
    "chapters"
]

export default function MangaData({manga, chapterListClassName}: MangaDataProps) {
    const [section, setSection] = useQueryState("section")
    const [chaptersState, setShowAll] = useState(false)

    const genres = manga.genres.map(value => value.names[0].text)

    const handleSwipe = (index: number) => {
        setShowAll(false)
        void setSection(INDEX2SECTION[index] || null)
    }

    const sectionIndex = INDEX2SECTION.indexOf(section || INDEX2SECTION[0])

    // Adaptive
    const [matches, setMatches] = useState(
        typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 1024px)")
            .addEventListener("change", e => setMatches(e.matches))
    }, [])

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const titleHeight = document.getElementById("manga-title")?.clientHeight
        const dataHeight = ref?.current?.clientHeight
        document.body.style.setProperty("--manga-meta-data-height", titleHeight && dataHeight ? titleHeight + dataHeight + "px" : "300px")
    })

    return (
        <>
            {matches ?
                <>
                    <div className={styles.mangaData} ref={ref}>
                        <div className={styles.description}>
                            {manga.descriptions[0].text}
                        </div>
                        <MangaDataGenres genres={genres}/>
                        <MangaMetaData manga={manga}/>
                        <CharactersList/>
                    </div>
                    <ChapterList showAll={chaptersState} setShowAll={setShowAll} className={chapterListClassName}/>
                </> :
                <SwipeableViews onChangeIndex={handleSwipe} index={sectionIndex}>
                    <div className={styles.mangaData}>
                        <div className={styles.description}>
                            {manga.descriptions[0].text}
                        </div>
                        <MangaDataGenres genres={genres}/>
                        <MangaMetaData manga={manga}/>
                        <CharactersList/>
                        <div className={styles.prompt}>
                            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
                            <span className={styles.text}>Взмахните влево, чтобы открыть список глав</span>
                        </div>
                    </div>
                    <ChapterList showAll={chaptersState} setShowAll={setShowAll}/>
                </SwipeableViews>
            }
        </>
    )
}
