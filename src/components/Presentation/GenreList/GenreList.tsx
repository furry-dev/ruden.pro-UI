import styles from './GenreList.module.sass'
import {Fragment} from "react"

interface GenreListProps {
    genres: string[]
}

export default function GenreList({ genres }: GenreListProps) {
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
