import Image from "next/image"
import styles from "./Manga.module.sass"
import MangaPageActions from "@/components/screens/Manga/Actions/MangaPageActions"
import MangaData from "@/components/screens/Manga/MangaData/MangaData"
import {MangaProps} from "@/components/screens/Manga/Manga.interface"
import Voter from "@/components/screens/Manga/Voter/Voter"


export default async function Manga({manga}: MangaProps) {
    return (
        <main className={styles.main}>
            <Image
                src={manga.covers[0].imagePath}
                alt={"background image"}
                width={375}
                height={535}
                className={`${styles.parallaxLayer} ${styles.backgroundImage}`}
            />
            <div className={`${styles.parallaxLayer} ${styles.mainContent}`}>
                <Image
                    src={manga.covers[0].imagePath}
                    alt={manga.titles[0].text}
                    width={375}
                    height={535}
                    className={styles.cover}
                />
                <Voter className={styles.voter} userVote={null}/>
                <div className={styles.data}>
                    <h1 className={styles.mangaTitle} id={"manga-title"}>{manga.titles[0].text}</h1>
                    <MangaPageActions className={styles.actions}/>
                    <MangaData chapterListClassName={styles.chapterList} manga={manga}/>
                </div>
            </div>
        </main>
    )
}
