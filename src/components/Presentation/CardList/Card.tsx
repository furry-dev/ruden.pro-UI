import styles from "./Card.module.sass"
import { ReactElement } from 'react'

/**
 * Represents a card component.
 * @param {string} image - The image source for the card.
 * @param {string} url - The URL link for the card.
 */
interface CardProps {
    image: string
    url: string
}

/**
 * Renders the card component.
 * @param {CardProps} props - The props object.
 * @returns {ReactElement} The card ReactElement.
 */
export default function Card({image, url}: CardProps): ReactElement {
    return (
        <a href={url} className={styles.card} style={{background: `url('${image}') center center / cover`}}>

        </a>
    )
}
