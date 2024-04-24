import { ReactElement } from "react"
import styles from "./Account.module.sass"
import Image from "next/image"
import {
    faAddressBook,
    faAddressCard,
    faBasketShopping,
    faCoins,
    faCreditCard,
    faGear,
    faRightFromBracket,
    faUserPen
} from "@fortawesome/free-solid-svg-icons"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Home page component.
 * @returns {Promise<ReactElement>} The home component ReactElement.
 */
export default async function Account(): Promise<ReactElement> {

    return (
        <>
            <Image className={styles.userBackgroundImage} src={"/manga-cover.jpg"} alt={"account background"} width={500} height={200}></Image>
            <main className={styles.main}>
                <section className={styles.userData}>
                    <div className={styles.userActions}>
                        <button className={styles.actionsButton}><FontAwesomeIcon className={styles.icon}
                            icon={faGear} /></button>
                        <Image className={styles.userAvatar} src={"/avatar.jpg"} alt={"user avatar"} width={150}
                            height={150}></Image>
                        <button className={styles.actionsButton}><FontAwesomeIcon className={styles.icon}
                            icon={faRightFromBracket} /></button>
                    </div>
                    <h1 className={styles.userName}>Ruden</h1>
                    <ul className={styles.list}>
                        <li><Link className={styles.listLink} href={"#"}>
                            <FontAwesomeIcon className={styles.linkIcon} icon={faUserPen} />
                            Управление аккаунтом
                        </Link></li>
                        <li><Link className={styles.listLink} href={"#"}>
                            <FontAwesomeIcon className={styles.linkIcon} icon={faCreditCard} />
                            Моя подписка
                        </Link></li>
                        <li><Link className={styles.listLink} href={"#"}>
                            <FontAwesomeIcon className={styles.linkIcon} icon={faBasketShopping} />
                            Мои покупки
                        </Link></li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Информация</h2>
                    <ul className={styles.list}>
                        <li><Link className={styles.listLink} href={"#"}>
                            <svg className={`${styles.linkIcon} ${styles.svgLinkIcon}`} xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512">
                                <path
                                    d="M248 504C111.3 504 0 392.8 0 256S111.3 8 248 8s248 111.3 248 248-111.3 248-248 248zm0-479.5C120.4 24.5 16.5 128.4 16.5 256S120.4 487.5 248 487.5 479.5 383.6 479.5 256 375.6 24.5 248 24.5zm27.6 21.8v24.6a185.9 185.9 0 0 1 83.6 34.5l17.4-17.4c-28.8-22.1-63.3-36.9-101-41.8zm-55.4 .1c-37.6 4.9-72.2 19.8-100.9 41.9l17.3 17.4h.1c24.1-17.8 52.6-30.1 83.5-34.7V46.4zm12.3 50.2v82.9c-10 2-19.4 5.9-27.7 11.4l-58.6-58.6-21.9 21.9 58.7 58.7c-5.5 8.2-9.5 17.6-11.5 27.6h-82.9v31h82.9c2 10 6 19.3 11.5 27.5l-58.7 58.7 21.9 21.9 58.6-58.6a77.9 77.9 0 0 0 27.7 11.5v82.9h31v-82.9c10.1-2 19.4-6.1 27.6-11.6l58.7 58.7 21.9-21.9-58.7-58.7c5.5-8.2 9.5-17.5 11.5-27.5h82.9v-31h-82.9c-2-10-6-19.4-11.5-27.6l58.7-58.7-21.9-21.9-58.7 58.7c-8.3-5.5-17.6-9.5-27.6-11.5V96.6h-31zm183.2 30.7l-17.4 17.4a186.3 186.3 0 0 1 34.7 83.7h24.6c-5-37.7-19.8-72.3-41.9-101zm-335.6 .1c-22.1 28.7-36.9 63.3-41.9 100.9h24.7c4.6-31 16.8-59.5 34.6-83.5l-17.4-17.4zM38.3 283.7c4.9 37.6 19.8 72.2 41.8 100.9l17.4-17.4c-17.8-24.1-29.9-52.6-34.5-83.5H38.3zm394.7 0c-4.6 31-16.8 59.5-34.7 83.6l17.4 17.4c22.1-28.7 37-63.3 41.9-101h-24.6zM136.7 406.4l-17.4 17.4c28.7 22.1 63.3 37 101 41.9v-24.6c-31-4.6-59.5-16.8-83.6-34.7zm222.5 .1c-24.1 17.8-52.6 30.1-83.6 34.7v24.6c37.7-4.9 72.2-19.8 101-41.9l-17.3-17.4h-.1z" />
                            </svg>
                            Экосистема
                        </Link></li>
                        <li><Link className={styles.listLink} href={"#"}>
                            <FontAwesomeIcon className={styles.linkIcon} icon={faAddressBook} />
                            Контакты
                        </Link></li>
                        <li><Link className={styles.listLink} href={"#"}>
                            <FontAwesomeIcon className={styles.linkIcon} icon={faAddressCard} />
                            Про нас
                        </Link></li>
                    </ul>
                </section>
            </main>
        </>
    )
}
