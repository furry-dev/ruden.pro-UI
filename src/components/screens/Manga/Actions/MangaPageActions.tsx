import styles from "./MangaPageActions.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBookOpen, faPlus} from "@fortawesome/free-solid-svg-icons"
import {ReactElement} from "react"

/**
 * Renders manga page actions component.
 * @returns {ReactElement} The manga actions ReactElement.
 */
export default function MangaPageActions({className}: { className: string }): ReactElement {
    return (
        <div className={`${styles.actions} ${className ?? ""}`}>
            <button className={`${styles.button} ${styles["actions-button"]}`}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                Добавить
            </button>
            <button className={`${styles["read-button"]} ${styles.button}`}>
                <FontAwesomeIcon icon={faBookOpen} className={styles.icon}/>
                Читать
            </button>
        </div>
    )
}
