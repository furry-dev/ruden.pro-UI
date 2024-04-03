import styles from "./MangaCard.module.sass"
import React, { ReactElement } from 'react'
import AgeRatingFlag, { GraphQLAgeRating } from '@/components/Presentation/AgeRatingFlag'
import Link from 'next/link'

export interface Manga {
    id: number
    age_rating: GraphQLAgeRating
    cover: {
        file: string
    }[]
}

/**
 * Represents a card component.
 * @param {string} image - The image source for the card.
 * @param {string} url - The URL link for the card.
 */
interface CardProps {
    manga: Manga
}

/**
 * Renders the card component.
 * @param {CardProps} props - The props object.
 * @returns {ReactElement} The card ReactElement.
 */
export default function MangaCard({manga}: CardProps): ReactElement {
    return (
        <div key={manga.id} className={styles.mangaCard}>
            <Link href={"/manga/${code}"} className={styles.card} style={{ background: `url('${manga.cover[0].file}') center center / cover` }}></Link>
            <AgeRatingFlag rating={manga.age_rating} />
        </div>
    )
}
