import styles from "./MangaCard.module.sass"
import React, { ReactElement } from 'react'
import AgeRatingFlag from '@/components/Presentation/Flags/AgeRatingFlag'
import Link from 'next/link'
import { MangaCardProps } from '@/components/Presentation/Lists/CardList/Cards/mangacard.interface'

/**
 * Renders the card component.
 * @param {MangaCardProps} props - The props object.
 * @returns {ReactElement} The card ReactElement.
 */
export default function MangaCard({manga}: MangaCardProps): ReactElement {
    return (
        <div key={manga.id} className={styles.mangaCard}>
            <Link href={"/manga/${code}"} className={styles.card} style={{ background: `url('${manga.cover[0].file}') center center / cover` }}></Link>
            <AgeRatingFlag rating={manga.ageRating} />
        </div>
    )
}
