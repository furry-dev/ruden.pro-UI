import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandshakeAngle, faLink} from "@fortawesome/free-solid-svg-icons"
import LinkCard from "@/components/screens/Contacts/LinkCard/LinkCard"

import styles from "./Contacts.module.sass"
import {faDiscord, faTelegram} from "@fortawesome/free-brands-svg-icons"

export default function Contacts() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.icon} icon={faLink}/>
                <h1>Ссылки</h1>
            </div>
            <ul className={styles.links}>
                <LinkCard className={styles.link} href={"#"} icon={faTelegram} text={"Chat"} subText={"@ruden_ch"}/>
                <LinkCard className={styles.link} href={"#"} icon={faTelegram} text={"Chanel (18+)"}
                    subText={"@Ruden_manga"}/>
                <LinkCard className={styles.link} href={"#"} icon={faTelegram} text={"Chanel"} subText={"@Ruden..."}/>
                <LinkCard className={styles.link} href={"#"} icon={faDiscord} text={"Discord"}
                    subText={"@Ruden_discord"}/>
                <LinkCard className={styles.link} centered={true} href={"#"} icon={faHandshakeAngle}
                    text={"I need help!!!"}/>
            </ul>
        </main>
    )
}