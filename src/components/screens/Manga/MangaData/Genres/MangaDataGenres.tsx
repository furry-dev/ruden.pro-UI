import styles from "./MangaDataGenres.module.sass"
import CategoryLink from "@/components/global/Links/Category/CategoryLink"

export default function MangaDataGenres({genres}: { genres: string[] }) {
    return (
        <ul className={styles.genres}>
            {genres.map((genre) => (
                <li key={null}><CategoryLink href={`/manga?genres=["${genre}"]`}>{genre}</CategoryLink></li>
            ))}
        </ul>
    )
}
