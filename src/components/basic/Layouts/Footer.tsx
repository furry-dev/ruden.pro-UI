"use client"

import styles from "./Footer.module.sass"
import Image from "next/image"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart, faHouse, faMagnifyingGlass, faNewspaper} from "@fortawesome/free-solid-svg-icons"
import { ReactElement } from "react"
import { usePathname } from "next/navigation"

/**
 * Renders the footer component.
 * @returns {ReactElement} The footer ReactElement.
 */
export default function Footer(): ReactElement {
    const pathname = usePathname()

    return (
        <footer className={styles.footer}>
            <nav className={styles.navigate}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faHouse} className={styles.icon}/>
                            <span className={styles.label}>Главная</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-lists" className={`${styles.link} ${pathname.includes("/my-lists") ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                            <span className={styles.label}>Мои списки</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search" className={`${styles.link} ${pathname.includes("/search") ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                            <span className={styles.label}>Поиск</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" className={`${styles.link} ${pathname.includes("/news") ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faNewspaper} className={styles.icon}/>
                            <span className={styles.label}>Новости</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account" className={`${styles.link} ${pathname.includes("/account") ? styles.active : ""}`}>
                            <Image width={32} height={32} src="/avatar.jpg" alt="avatar" className={styles.avatar}/>
                            <span className={styles.label}>Профиль</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
