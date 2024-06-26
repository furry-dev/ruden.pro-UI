import styles from "./MangaCard.module.sass"
import React, {ReactElement} from "react"
import AgeRatingFlag from "@/components/global/Flags/AgeRatingFlag"
import Link from "next/link"
import {MangaCardProps} from "@/components/global/Lists/CardList/Cards/mangacard.interface"

/**
 * Renders the card component.
 * @param {MangaCardProps} props - The props object.
 * @returns {ReactElement} The card ReactElement.
 */
export default function MangaCard({manga}: MangaCardProps): ReactElement {
    return (
        <div key={manga._id} className={styles.mangaCard}>
            <Link href={`/manga/${manga.slug}`} className={styles.card}
                style={{background: `url('${manga.covers[0].imagePath}') center center / cover`}}></Link>
            <AgeRatingFlag rating={manga.ageRating}/>
        </div>
    )
}
