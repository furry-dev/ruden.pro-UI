import styles from "./GenreList.module.sass"
import { Fragment, ReactElement } from "react"

/**
 * Renders a list of genres.
 * @param {GenreListProps} props - The props object.
 * @returns {ReactElement} The genre list ReactElement.
 */
export default function GenreList({ genres, className }: GenreListProps): ReactElement {
    return (
        <ul className={`${styles.genres} ${className}`}>
            {genres.map((genre, index) => (
                <Fragment key={index}>
                    <li className={styles.genre}>{genre}</li>
                    {index !== genres.length - 1 && <li className={styles.delimiter}></li>}
                </Fragment>
            ))}
        </ul>
    )
}
