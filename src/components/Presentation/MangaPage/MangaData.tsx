"use client"

import React, { useState } from 'react';
import styles from './MangaData.module.sass';
import ChapterList from '@/components/Presentation/ChapterList';
import MangaDataGenres from '@/components/Presentation/MangaPage/MangaDataGenres';
import MangaMetaData from '@/components/Presentation/MangaPage/MangaMetaData';
import SwipeableViews, { OnSwitchingCallback } from 'react-swipeable-views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function MangaData() {
    const handleSwipe = () => {

    };

    return (
        <SwipeableViews className={styles.swipeable} onChangeIndex={handleSwipe}>
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
            <ChapterList />
        </SwipeableViews>
    )
}
