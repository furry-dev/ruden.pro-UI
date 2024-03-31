import styles from './GenreList.module.sass'
import { Fragment, ReactElement } from 'react';

/**
 * Represents the props for the GenreList component.
 * @param {object} props - The props object.
 * @param {string[]} genres - An array of genre strings.
 */
interface GenreListProps {
    genres: string[]
}

/**
 * Renders a list of genres.
 * @param {GenreListProps} props - The props object.
 * @returns {ReactElement} The genre list ReactElement.
 */
export default function GenreList({ genres }: GenreListProps): ReactElement {
    return (
        <ul className={styles.genres}>
            {genres.map((genre, index) => (
                <Fragment key={index}>
                    <li className={styles.genre}>{genre}</li>
                    {index !== genres.length - 1 && <li className={styles.delimiter}></li>}
                </Fragment>
            ))}
        </ul>
    )
}
