import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import styles from "./LinkCard.module.sass"
import {LinkCardProps} from "@/components/screens/Contacts/LinkCard/link-card.interfaces"

export default function LinkCard({icon, text, subText, href, className, centered}: LinkCardProps) {
    return (
        <li className={`${styles.listItem} ${className ?? ""} ${centered ? styles.centered : ""}`}>
            <Link href={href} className={styles.card}>
                <FontAwesomeIcon className={styles.icon} icon={icon}/>
                <div className={styles.right}>
                    <h3 className={styles.text}>{text}</h3>
                    {subText && <h5 className={styles.subText}>{subText}</h5>}
                </div>
            </Link>
        </li>
    )
}