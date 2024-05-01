import {EcosystemProps} from "@/components/screens/Account/Ecosystem/ecosystem.interfaces"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFont, faGraduationCap, faTerminal, faXmark} from "@fortawesome/free-solid-svg-icons"

import styles from "./Ecosystem.module.sass"
import Link from "next/link"
import {animated, useSpring} from "react-spring"

export default function Ecosystem({isOpened, setIsOpened}: EcosystemProps) {
    const animation = useSpring({
        opacity: isOpened ? 1 : 0,
        transform: isOpened ? "translateX(0)" : "translateX(200%)",
        config: {
            mass: 18,
            friction: 180,
            tension: 1300,
        }
    })

    return (
        <animated.div className={styles.modal} style={animation}>
            <div className={styles.header}>
                <h2 className={styles.modalName}>Екосистема</h2>
                <button className={styles.closeBtn} onClick={() => setIsOpened(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            <ul className={styles.content}>
                <li>
                    <Link className={styles.link} href={"#"}>
                        <FontAwesomeIcon className={styles.icon} icon={faFont}/>
                        RudenFonts
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"#"}>
                        <FontAwesomeIcon className={styles.icon} icon={faTerminal}/>
                        Programs
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"#"}>
                        <FontAwesomeIcon className={styles.icon} icon={faGraduationCap}/>
                        Learning
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"#"}>
                        <FontAwesomeIcon className={styles.icon} icon={faFont}/>
                        Ruden Fonts
                    </Link>
                </li>
            </ul>
        </animated.div>
    )
}