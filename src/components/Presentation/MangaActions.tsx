import styles from "./MangaActions.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faCircleInfo, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function MangaActions() {
    return (
        <div className={styles.actions}>
            <button className={`${styles.button} ${styles['actions-button']}`}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                Добавить
            </button>
            <button className={`${styles['read-button']} ${styles.button}`}>
                <FontAwesomeIcon icon={faBookOpen} className={styles.icon}/>
                Читать
            </button>
            <button className={`${styles.button} ${styles['actions-button']}`}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.icon}/>
                Подробнее
            </button>
        </div>
    )
}