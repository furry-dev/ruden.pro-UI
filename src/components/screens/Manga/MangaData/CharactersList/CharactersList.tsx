import CharacterCard from "@/components/screens/Manga/MangaData/CharactersList/CharacterCard/CharacterCard"
import styles from "./CharactersList.module.sass"

export default function CharactersList() {
    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Персонажи:</h2>
            <ul
                title={"hold shift to scroll horizontal"}
                className={styles.list}
                onTouchStart={(e => e.stopPropagation())}>
                <CharacterCard/>
                <CharacterCard/>
                <CharacterCard/>
                <CharacterCard/>
                <CharacterCard/>
                <CharacterCard/>
            </ul>
        </section>
    )
}