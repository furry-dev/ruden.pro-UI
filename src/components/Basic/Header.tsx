import Logo from "@/components/Basic/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import styles from './Header.module.sass'

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <FontAwesomeIcon icon={faBell} className={styles.notify}/>
        </header>
    )
}