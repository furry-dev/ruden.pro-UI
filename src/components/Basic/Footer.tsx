import styles from './Footer.module.sass'
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHouse, faMagnifyingGlass, faNewspaper} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navigate}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/" className={`${styles.link} ${styles.active}`}>
                            <FontAwesomeIcon icon={faHouse} className={styles.icon}/>
                            <span className={styles.label}>Главная</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-lists" className={styles.link}>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                            <span className={styles.label}>Мои списки</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search" className={styles.link}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                            <span className={styles.label}>Поиск</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" className={styles.link}>
                            <FontAwesomeIcon icon={faNewspaper} className={styles.icon}/>
                            <span className={styles.label}>Новости</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account" className={styles.link}>
                            <Image width={32} height={32} src="/avatar.jpg" alt="avatar" className={styles.avatar}/>
                            <span className={styles.label}>Профиль</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}