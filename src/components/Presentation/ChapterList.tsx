"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ChapterList.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleUp, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

export default function ChapterList() {
    const [showAll, setShowAll] = useState(false)

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
        <div>
            <div className={styles.chapterListHeader}>
                <h3>Все главы:</h3>
                <button className={styles.sortButton}><FontAwesomeIcon icon={faArrowDownShortWide}/> Сортировка</button>
            </div>
            <ul className={styles.chapterList}>
                {renderChapterList()}
            </ul>
            <button onClick={handleClick} className={styles.showAll}>
                {showAll ? (
                    <>
                        <FontAwesomeIcon icon={faAngleUp} className={styles.icon} />
                        Скрыть все главы
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
                        Показать все главы
                    </>
                )}
            </button>
        </div>
    );
}
