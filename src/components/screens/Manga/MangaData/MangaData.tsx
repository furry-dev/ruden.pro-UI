"use client"

import styles from "./MangaData.module.sass"
import ChapterList from "@/components/Presentation/Lists/ChapterList/ChapterList"
import SwipeableViews from "react-swipeable-views"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import MangaDataGenres from "@/components/screens/Manga/MangaData/Genres/MangaDataGenres"
import MangaMetaData from "@/components/screens/Manga/MangaData/Meta/MangaMetaData"
import { useState } from "react"
import { useQueryState } from "nuqs"

const INDEX2SECTION = [
    "data",
    "chapters"
]

export default function MangaData() {
    const [section, setSection] = useQueryState("section")
    const [chaptersState, setShowAll] = useState(false)

    const handleSwipe = (index: number) => {
        setShowAll(false)
        void setSection(INDEX2SECTION[index] || null)
    }

    const sectionIndex = INDEX2SECTION.indexOf(section || INDEX2SECTION[0])

    return (
        <SwipeableViews className={styles.swipeable} onChangeIndex={handleSwipe} index={sectionIndex}>
            <div className={styles.mangaData}>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam autem cumque eaque
                    explicabo illum in itaque laborum maxime minus nobis nulla obcaecati placeat repellat sunt, tempora!
                    Ab,
                    alias autem consectetur eaque explicabo ipsam iusto, optio perferendis quisquam rerum soluta ut vero
                    voluptates. Dicta nemo non quam quo totam?
                </div>
                <MangaDataGenres />
                <MangaMetaData />
                <div className={styles.prompt}>
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                    <span className={styles.text}>Взмахните влево, чтобы открыть список глав</span>
                </div>
            </div>
            <ChapterList showAll={chaptersState} setShowAll={setShowAll} />
        </SwipeableViews>
    )
}
