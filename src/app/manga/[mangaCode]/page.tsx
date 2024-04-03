import Image from 'next/image'
import styles from './MangaPage.module.sass'
import MangaPageActions from '@/components/Presentation/MangaPage/MangaPageActions'
import MangaData from '@/components/Presentation/MangaPage/MangaData'

interface PageParams {
    params: {
        mangaCode: string
    }
}

export default function MangaDetail({params}: PageParams) {
    return (
        <>
            <Image
                src={"/manga-cover.jpg"}
                alt={"background image"}
                width={375}
                height={535}
                className={styles.backgroundImage}
            />
            <main className={styles.mainContent}>
                <Image
                    src={"/manga-cover.jpg"}
                    alt={"background image"}
                    width={375}
                    height={535}
                    className={styles.cover}
                />
                <h1 className={styles.mangaTitle}>Я отдала свой первый раз брату</h1>
                <MangaPageActions />
                <MangaData />
            </main>
        </>
    )
}