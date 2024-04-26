import styles from "./RecommendedMangaActions.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookOpen, faCircleInfo, faPlus} from "@fortawesome/free-solid-svg-icons"
import {ReactElement} from "react"
import {
    RecommendedMangaActionsProps
} from "@/components/screens/Home/RecommendedManga/Actions/recommended-manga-actions.interfaces"
import Link from "next/link"

/**
 * Renders manga actions component.
 * @returns {ReactElement} The manga actions ReactElement.
 */
export default function RecommendedMangaActions({manga}: RecommendedMangaActionsProps): ReactElement {
    return (
        <div className={styles.actions}>
            <button className={`${styles.button} ${styles["actions-button"]}`}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                Добавить
            </button>
            <button className={`${styles["read-button"]} ${styles.button}`}>
                <FontAwesomeIcon icon={faBookOpen} className={styles.icon}/>
                Читать
            </button>
            <Link href={`/manga/${manga.slug}`} className={`${styles.button} ${styles["actions-button"]}`}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.icon}/>
                Подробнее
            </Link>
        </div>
    )
}