"use client"

import React from "react"
import Link from "next/link"
import styles from "./ChapterList.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp, faArrowDownShortWide} from "@fortawesome/free-solid-svg-icons"
import {ChapterListProps} from "@/components/global/Lists/ChapterList/chapter-list.interfaces"

export default function ChapterList(props: ChapterListProps) {
    const {showAll, setShowAll} = props

    const handleClick = () => {
        setShowAll(!showAll)
    }

    const renderChapterList = () => {
        const chapterCount = showAll ? 20 : 9

        return (
            [...Array(chapterCount)].map((x, i) => (
                <li className={styles.chapterListItem} key={i}>
                    <Link className={styles.chapterListItemLink} href={`/manga/name/${i + 1}`}>
                        <span>Глава {i + 1}</span> - <span className={styles.chapterDesc}>Описание главы</span>
                    </Link>
                </li>
            ))
        )
    }

    return (
        <div className={props.className || ""}>
            <div className={styles.chapterListHeader}>
                <h3>Все главы:</h3>
                <button className={styles.sortButton}><FontAwesomeIcon icon={faArrowDownShortWide}/> Сортировка
                </button>
            </div>
            <ul className={styles.chapterList}>
                {renderChapterList()}
            </ul>
            <button onClick={handleClick} className={styles.showAll}>
                {showAll ? (
                    <>
                        <FontAwesomeIcon icon={faAngleUp} className={styles.icon}/>
                        Скрыть все главы
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
                        Показать все главы
                    </>
                )}
            </button>
        </div>
    )
}
