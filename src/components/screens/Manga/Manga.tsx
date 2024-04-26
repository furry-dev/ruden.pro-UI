import Image from "next/image"
import styles from "./Manga.module.sass"
import MangaPageActions from "@/components/screens/Manga/Actions/MangaPageActions"
import MangaData from "@/components/screens/Manga/MangaData/MangaData"
import {MangaProps} from "@/components/screens/Manga/Manga.interface"


export default function Manga({params}: MangaProps) {
    return (
        <main className={styles.main}>
            <Image
                src={"/manga-cover.jpg"}
                alt={"background image"}
                width={375}
                height={535}
                className={`${styles.parallaxLayer} ${styles.backgroundImage}`}
            />
            <div className={`${styles.parallaxLayer} ${styles.mainContent}`}>
                <Image
                    src={"/manga-cover.jpg"}
                    alt={"background image"}
                    width={375}
                    height={535}
                    className={styles.cover}
                />
                <h1 className={styles.mangaTitle}>Я отдала свой первый раз брату</h1>
                <MangaPageActions/>
                <MangaData/>
            </div>
        </main>
    )
}
